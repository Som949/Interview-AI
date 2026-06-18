import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ChevronRight, FileText } from "lucide-react";
import "../home.scss";
import { getInterviewReports } from "../services/interview.api";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadReports = async () => {
      try {
        const data = await getInterviewReports();
        setReports(data.interviewReports || []);
      } catch (apiError) {
        setError(
          apiError.response?.data?.message ||
            "We could not load your interview reports.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  return (
    <main className="dashboard-page">
      <section className="page-hero compact">
        <div>
          <p className="eyebrow">Saved Reports</p>
          <h1>Review your previous interview prep runs.</h1>
        </div>
      </section>

      <section className="reports-page panel-stack">
        {loading ? <p className="empty-state">Loading reports...</p> : null}
        {error ? <p className="status-message error-message">{error}</p> : null}

        {!loading && !error && reports.length === 0 ? (
          <div className="empty-card">
            <FileText size={28} />
            <h2>No reports yet</h2>
            <p>Create your first interview report from the dashboard.</p>
            <Link to="/" className="inline-action">
              Generate a report
            </Link>
          </div>
        ) : null}

        {!loading && !error && reports.length > 0 ? (
          <div className="report-grid">
            {reports.map((report) => (
              <Link
                key={report._id}
                to={`/reports/${report._id}`}
                className="report-card"
              >
                <div className="report-card-top">
                  <span className="report-badge">Match {report.matchScore}%</span>
                  <ChevronRight size={16} />
                </div>
                <h2>{report.title}</h2>
                <p>Generated on {formatDate(report.createdAt)}</p>
              </Link>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}
