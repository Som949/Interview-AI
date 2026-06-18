import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("API KEY:", process.env.GOOGLE_GENAI_API_KEY);

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_GENAI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
});

const run = async () => {
  try {
    console.log("Sending request...");

    const result = await model.generateContent("hello");

    console.log("Response received");

    const text = result.response.text();

    console.log(text);

  } catch (error) {
    console.log("FULL ERROR:");
    console.log(error);
  }
};

run();