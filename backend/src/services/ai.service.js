import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

const interviewReportSchema = z.object({
  title: z.string(),

  matchScore: z.number(),

  technicalQuestions: z.array(
    z.object({
      question: z.string(),
      intention: z.string(),
      answer: z.string(),
    }),
  ),

  behavioralQuestions: z.array(
    z.object({
      question: z.string(),
      intention: z.string(),
      answer: z.string(),
    }),
  ),

  skillGaps: z.array(
    z.object({
      skill: z.string(),
      severity: z.enum([
        "low",
        "medium",
        "high",
      ]),
    }),
  ),

  preparationPlan: z.array(
    z.object({
      day: z.number(),
      focus: z.string(),
      tasks: z.array(z.string()),
    }),
  ),
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  const prompt = `
Generate a highly detailed interview preparation report.

Return ONLY valid JSON.

IMPORTANT REQUIREMENTS:

- Generate EXACTLY 5 technicalQuestions
- Generate EXACTLY 5 behavioralQuestions
- Generate EXACTLY 5 skillGaps
- Generate EXACTLY 7 preparationPlan days
- Each preparationPlan day must contain at least 5 tasks
- Preparation tasks must be actionable
- Match the structure EXACTLY

Required JSON structure:

{
  "title": "string",
  "matchScore": number,
  "technicalQuestions": [
    {
      "question": "string",
      "intention": "string",
      "answer": "string"
    }
  ],
  "behavioralQuestions": [
    {
      "question": "string",
      "intention": "string",
      "answer": "string"
    }
  ],
  "skillGaps": [
    {
      "skill": "string",
      "severity": "low | medium | high"
    }
  ],
  "preparationPlan": [
    {
      "day": number,
      "focus": "string",
      "tasks": ["string"]
    }
  ]
}

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}
`;

  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: prompt,

      config: {
        temperature: 0.2,
      },
    });

  let text = response.text.trim();

  console.log("RAW RESPONSE:");
  console.log(text);

  // remove markdown if model adds it
  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  let parsed;

  try {
    parsed = JSON.parse(text);
  } catch (error) {
    throw new Error(
      "AI returned invalid JSON",
    );
  }

  // STRICT VALIDATION
  const validated =
    interviewReportSchema.parse(parsed);

  return validated;
}

export default generateInterviewReport;