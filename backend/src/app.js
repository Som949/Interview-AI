import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import cors from "cors";
import interviewRoute from "./routes/ai.routes.js";

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    ...(process.env.FRONTEND_URL || "")
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean)
];

app.use(cors(
    {
        origin(origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("Not allowed by CORS"));
        },
        credentials:true
    }
));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));



app.use("/api/auth",authRoute);
app.use("/api/interview",interviewRoute);



export default app;
