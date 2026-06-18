import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, CalendarDays, ChevronRight, Target } from "lucide-react";
import "../home.scss";
import { getInterviewReportById } from "../services/interview.api";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getMatchLevel(score) {
  if (score >= 85) return "Excellent Fit";
  if (score >= 70) return "Strong Match";
  if (score >= 55) return "Moderate Match";
  return "Needs Work";
}

function getSeverityEmoji(severity = "medium") {
  if (severity === "high") return "😵";
  if (severity === "low") return "🙂";
  return "😐";
}

const reportSections = [
  {
    key: "technical",
    step: "A",
    title: "Technical Questions",
  },
  {
    key: "behavioral",
    step: "B",
    title: "Behavioral Questions",
  },
  {
    key: "gaps",
    step: "C",
    title: "Skill Gaps",
  },
  {
    key: "prep",
    step: "D",
    title: "Preparation Plan",
  },
];

export default function ReportDetails() {
  const { interviewId } = useParams();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("technical");

  useEffect(() => {
    const loadReport = async () => {
      try {
        const data = await getInterviewReportById(interviewId);
        setReport(data.interviewReport);
      } catch (apiError) {
        setError(
          apiError.response?.data?.message ||
            "We could not load that interview report.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadReport();
  }, [interviewId]);

  if (loading) {
    return (
      <main className="dashboard-page">
        <section className="panel-stack">
          <p className="empty-state">Loading report...</p>
        </section>
      </main>
    );
  }

  if (error || !report) {
    return (
      <main className="dashboard-page">
        <section className="panel-stack">
          <p className="status-message error-message">
            {error || "Report not found."}
          </p>
          <Link to="/reports" className="inline-action">
            Back to reports
          </Link>
        </section>
      </main>
    );
  }

  const scoreValue = Number(report.matchScore) || 0;
  const scoreLevel = getMatchLevel(scoreValue);
  const scoreGaugeStyle = {
    "--score-angle": `${Math.max(0, Math.min(scoreValue, 100)) * 3.6}deg`,
  };

  return (
    <main className="dashboard-page">
      <section className="page-hero compact">
        <div className="report-hero-layout">
          <div>
            <Link to="/reports" className="back-link">
              <ArrowLeft size={16} />
              <span>Back to reports</span>
            </Link>
            <p className="eyebrow">Interview Report</p>
            <h1>{report.title}</h1>
            <div className="hero-metrics">
              <span>
                <Target size={16} />
                {scoreLevel}
              </span>
              <span>
                <CalendarDays size={16} />
                {formatDate(report.createdAt)}
              </span>
            </div>
          </div>

          <div className="score-ball-card">
            <div className="score-ball" style={scoreGaugeStyle}>
              <div className="score-ball-inner">
                <strong>{scoreValue}%</strong>
                <span>Match</span>
              </div>
            </div>
            <div className="score-copy">
              <p>Level Gauge</p>
              <h2>{scoreLevel}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="report-tabs">
        {reportSections.map((section, index) => (
          <div key={section.key} className="report-tab-wrap">
            <button
              type="button"
              className={`report-tab ${activeSection === section.key ? "active" : ""}`}
              onClick={() => setActiveSection(section.key)}
            >
              <span className="report-tab-step">{section.step}</span>
              <span>{section.title}</span>
            </button>
            {index < reportSections.length - 1 ? (
              <span className="report-tab-arrow" aria-hidden="true">
                <ChevronRight size={16} />
              </span>
            ) : null}
          </div>
        ))}
      </section>

      {activeSection === "technical" ? (
        <section className="report-section-panel">
          <article className="detail-card detail-card-wide">
            <h2>Technical Questions</h2>
            <div className="question-list">
              {report.technicalQuestions?.map((item, index) => (
                <div key={`${item.question}-${index}`} className="question-card">
                  <h3>{item.question}</h3>
                  <p>
                    <strong>Why it matters:</strong> {item.intention}
                  </p>
                  <p>
                    <strong>Strong answer direction:</strong> {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      ) : null}

      {activeSection === "behavioral" ? (
        <section className="report-section-panel">
          <article className="detail-card detail-card-wide">
            <h2>Behavioral Questions</h2>
            <div className="question-list">
              {report.behavioralQuestions?.map((item, index) => (
                <div key={`${item.question}-${index}`} className="question-card">
                  <h3>{item.question}</h3>
                  <p>
                    <strong>Why it matters:</strong> {item.intention}
                  </p>
                  <p>
                    <strong>Strong answer direction:</strong> {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      ) : null}

      {activeSection === "gaps" ? (
        <section className="report-section-panel">
          <article className="detail-card detail-card-wide">
            <h2>Skill Gaps</h2>
            <div className="gap-list">
              {report.skillGaps?.map((gap, index) => (
                <div key={`${gap.skill}-${index}`} className="gap-pill">
                  <span className="gap-pill-label">
                    <span className="gap-pill-emoji" aria-hidden="true">
                      {getSeverityEmoji(gap.severity)}
                    </span>
                    <span>{gap.skill}</span>
                  </span>
                  <strong>{gap.severity}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>
      ) : null}

      {activeSection === "prep" ? (
        <section className="report-detail-grid">
          <article className="detail-card">
            <h2>Preparation Plan</h2>
            <div className="plan-list">
              {report.preparationPlan?.map((dayPlan) => (
                <div key={dayPlan.day} className="plan-card">
                  <h3>Day {dayPlan.day}</h3>
                  <p>{dayPlan.focus}</p>
                  <ul>
                    {dayPlan.tasks?.map((task, index) => (
                      <li key={`${task}-${index}`}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="detail-card">
            <h2>Submission Snapshot</h2>
            <div className="snapshot-block">
              <div>
                <h3>Self Description</h3>
                <p>{report.selfDescription}</p>
              </div>
              <div>
                <h3>Job Description</h3>
                <p>{report.jobDescription}</p>
              </div>
            </div>
          </article>
        </section>
      ) : null}
    </main>
  );
}
