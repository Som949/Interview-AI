import mongoose from "mongoose";

/**
 * INTERVIEW REPORT SCHEMA
 */

const technicalQuestionsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required"],
    },

    intention: {
      type: String,
      required: [true, "Intention is required"],
    },

    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
  },
);

const behavioralQuestionsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required"],
    },

    intention: {
      type: String,
      required: [true, "Intention is required"],
    },

    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
  },
);

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is required"],
    },

    severity: {
      type: String,

      enum: ["low", "medium", "high"],

      required: [true, "Severity is required"],
    },
  },
  {
    _id: false,
  },
);

const preparationPlanSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: [true, "Day is required"],
    },

    focus: {
      type: String,
      required: [true, "Focus is required"],
    },

    tasks: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    _id: false,
  },
);

const metaDataSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: [true, "AI model is required"],
    },
  },
  {
    _id: false,
  },
);

const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "Job description is required"],
    },

    resume: {
      type: String,
      required: [true, "Resume is required"],
    },

    selfDescription: {
      type: String,
      required: [true, "Self description is required"],
    },

    title: {
      type: String,
      required: [true, "Title is required"],
    },

    matchScore: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },

    technicalQuestions: [
      technicalQuestionsSchema,
    ],

    behavioralQuestions: [
      behavioralQuestionsSchema,
    ],

    skillGaps: [skillGapSchema],

    preparationPlan: [
      preparationPlanSchema,
    ],

    metaData: metaDataSchema,

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const interviewReportModel = mongoose.model(
  "interview_report",
  interviewReportSchema,
);

export default interviewReportModel;