# 🚀 InterviewAI

An AI-powered Resume Analyzer and Interview Preparation Platform that helps candidates evaluate their resumes, compare them with job descriptions, and generate personalized interview preparation reports using Google Gemini AI.

## 🌐 Live Demo

**Frontend:**
https://interviewai-indol.vercel.app

**Backend API:**
https://interview-ai-uoaj.onrender.com

---

## 📌 Overview

InterviewAI is a full-stack AI-powered web application designed to help job seekers improve their interview readiness. Users can upload their resumes, provide a job description, and receive a detailed AI-generated interview preparation report including technical questions, expected answers, and performance insights.

---

## ✨ Features

* 📄 Resume Upload & PDF Parsing
* 🤖 AI-Powered Resume Analysis using Gemini AI
* 🎯 Job Description Matching
* 📊 Detailed Interview Readiness Reports
* ❓ Personalized Technical Interview Questions
* 🔐 Secure Authentication & Authorization (JWT)
* 📁 Interview Report Storage & Retrieval
* ☁️ Fully Deployed MERN Stack Application
* 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* SCSS
* Axios
* Redux Toolkit

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer
* PDF-Parse
* Cookie Parser
* CORS

### AI Integration

* Google Gemini API
* Google GenAI SDK

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

```text
InterviewAI
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   ├── services
│   │   ├── middlewares
│   │   └── db
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   ├── public
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Som949/Interview-AI.git
cd Interview-AI
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
FRONTEND_URL=http://localhost:5173
```

---

## 📸 Workflow

1. Register/Login
2. Upload Resume (PDF)
3. Paste Job Description
4. Generate AI Interview Report
5. Review Technical Questions & Suggestions
6. Improve Interview Preparation

---

## 👨‍💻 Author

**Sanskar Sharma**

GitHub: https://github.com/Som949

---

⭐ If you found this project useful, consider giving it a star on GitHub.
