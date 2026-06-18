import api from "../../auth/services/axios.api";

const createInterviewReport = async (payload) => {
  const formData = new FormData();
  formData.append("jobDescription", payload.jobDescription);
  formData.append("selfDescription", payload.selfDescription);
  formData.append("resume", payload.resume);

  const res = await api.post("/interview/report", formData);
  return res.data;
};

const getInterviewReports = async () => {
  const res = await api.get("/interview/reports");
  return res.data;
};

const getInterviewReportById = async (interviewId) => {
  const res = await api.get(`/interview/report/${interviewId}`);
  return res.data;
};

export {
  createInterviewReport,
  getInterviewReports,
  getInterviewReportById,
};
