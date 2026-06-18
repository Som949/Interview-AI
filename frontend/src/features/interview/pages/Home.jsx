import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { ArrowDown, CheckCircle2, FileUp, LoaderCircle, Target, UserRound } from "lucide-react";
import "../home.scss";
import { createInterviewReport } from "../services/interview.api";

const initialFormState = {
  jobDescription: "",
  selfDescription: "",
  resume: null,
};

const processSteps = [
  { icon: Target, label: "Target Role Data" },
  { icon: FileUp, label: "Resume Alignment" },
  { icon: UserRound, label: "Behavioral Mapping" },
  { icon: Target, label: "AI Report Build" },
];

const loadingMessages = [
  "Reading job description",
  "Parsing resume context",
  "Mapping interview signals",
  "Generating final report",
];

export default function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");
  const progressTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError("");
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setError("");
    setFormData((current) => ({
      ...current,
      resume: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.resume) {
      setError("Please upload your resume PDF before generating a report.");
      return;
    }

    try {
      setSubmitting(true);
      setActiveStep(0);
      setLoadingMessage(loadingMessages[0]);

      progressTimerRef.current = setInterval(() => {
        setActiveStep((currentStep) => {
          const nextStep = Math.min(currentStep + 1, processSteps.length - 1);
          setLoadingMessage(loadingMessages[nextStep]);
          return nextStep;
        });
      }, 1100);

      const data = await createInterviewReport(formData);
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
      setActiveStep(processSteps.length - 1);
      setLoadingMessage("Report ready");
      navigate(`/reports/${data.interviewReport._id}`);
    } catch (apiError) {
      setError(
        apiError.response?.data?.message ||
          "We could not generate the report right now.",
      );
    } finally {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
      setSubmitting(false);
      setLoadingMessage("");
      setActiveStep(0);
    }
  };

  return (
    <main className="dashboard-page">
      <section className="page-hero page-hero-minimal">
        <div>
          <p className="eyebrow">Interview Report</p>
          <h1>Turn your resume and target role into a focused prep report.</h1>
        </div>
        <span className="hero-inline-note">Backend-connected generation</span>
      </section>

      <form className="home" onSubmit={handleSubmit}>
        <header className="page-header">
          <h2>Create Report</h2>
          <p>
            Everything here maps to the current backend payload:
            <code> jobDescription</code>, <code>selfDescription</code>, and{" "}
            <code>resume</code>.
          </p>
        </header>

        <div className="left panel">
          <div className="section-heading">
            <span>Job Description</span>
            <p>Paste the exact role you want to prepare for.</p>
          </div>
          <textarea
            name="jobDescription"
            id="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            placeholder="Paste the target job description, responsibilities, and preferred skills..."
            required
          />
        </div>

        <div className="right">
          <div className="process-waterfall panel">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const stateClass = submitting
                ? index < activeStep
                  ? "is-complete"
                  : index === activeStep
                    ? "is-active"
                    : ""
                : "";

              return (
                <div key={step.label} className="step-flow">
                  <div className={`step ${stateClass}`}>
                    <div className="step-number">
                      {submitting && index < activeStep ? (
                        <CheckCircle2 size={15} />
                      ) : index === activeStep && submitting ? (
                        <LoaderCircle size={15} className="step-spinner" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <Icon size={18} />
                    <div className="step-text">{step.label}</div>
                    {submitting && index === activeStep ? (
                      <small className="step-status">In progress</small>
                    ) : null}
                  </div>
                  {index < processSteps.length - 1 ? (
                    <div className="step-arrow">
                      <ArrowDown size={14} />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="controls-group panel">
            <div className="section-heading">
              <span>Candidate Inputs</span>
              <p>
                Add the resume and personal context the AI should evaluate.
                {submitting ? ` ${loadingMessage}...` : ""}
              </p>
            </div>

            <div className="input-group">
              <label htmlFor="resume">Upload Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                onChange={handleFileChange}
                required
              />
              <small>{formData.resume ? formData.resume.name : "PDF only"}</small>
            </div>

            <div className="input-group">
              <label htmlFor="selfDescription">Self Description</label>
              <textarea
                name="selfDescription"
                id="selfDescription"
                value={formData.selfDescription}
                onChange={handleChange}
                placeholder="Summarize your background, strengths, project experience, and what you want the interviewer to notice..."
                required
              />
            </div>
          </div>
        </div>

        {error ? <p className="status-message error-message">{error}</p> : null}

        {submitting ? (
          <div className="generation-status">
            <div className="generation-loader" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>{loadingMessage}</p>
          </div>
        ) : null}

        <button type="submit" className="generate-button" disabled={submitting}>
          {submitting ? "Generating report" : "Generate Interview Report"}
        </button>
      </form>
    </main>
  );
}
