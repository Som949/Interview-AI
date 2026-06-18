const resume = `
Ananya Deshmukh
Email: ananya.deshmukh@gmail.com
Phone: +91 9123456789
LinkedIn: linkedin.com/in/ananyadesh
GitHub: github.com/ananyadesh

Objective:
Computer Science student passionate about Artificial Intelligence and backend systems, seeking an opportunity to build intelligent and scalable software solutions.

Education:
Bachelor of Technology in Computer Science Engineering
ABC Institute of Technology, Nagpur
2021 – 2025
CGPA: 8.9

Technical Skills:
Languages: Python, Java, SQL
Backend: Django, Flask, REST APIs
Data Science: Pandas, NumPy, Scikit-learn
Database: PostgreSQL
Tools: Git, Docker, Linux
Core Subjects: Data Structures, Operating Systems, DBMS, Machine Learning

Projects:

AI Resume Parser
Built an NLP-based system to extract structured information from resumes using Python and SpaCy. Improved parsing accuracy using custom entity recognition.

Movie Recommendation System
Developed a recommendation engine using collaborative filtering and cosine similarity. Implemented using Python and Pandas.

Expense Tracker API
Created a RESTful API using Django REST Framework to manage personal expenses with authentication and analytics features.

Internship:
Backend Developer Intern
XYZ Software Pvt Ltd
May 2024 – July 2024
Worked on developing REST APIs, optimizing database queries, and improving backend performance for enterprise applications.

Achievements:
Finalist in Smart India Hackathon
Completed 200+ problems on LeetCode

Certifications:
Machine Learning – Coursera
Python for Everybody – Coursera

Strengths:
Strong analytical thinking
Attention to detail
Ability to learn and adapt quickly
`;

const selfDescription = `
I am a Computer Science Engineering student with a strong interest in artificial intelligence and backend development. I have hands-on experience in building data-driven applications and REST APIs using Python frameworks like Django and Flask. My projects include developing an AI-based resume parser and a recommendation system, which helped me gain practical exposure to machine learning and data processing.

I am comfortable working with databases such as PostgreSQL and have experience in writing optimized queries and designing scalable backend systems. I also have knowledge of Docker and Linux environments, which helps me understand deployment and system-level concepts.

I enjoy solving real-world problems using technology and continuously improving my skills. I am a detail-oriented individual who values clean code, efficient design, and collaboration in team environments. I am looking for an opportunity where I can contribute to impactful projects and grow as a software engineer.
`;

const jobDescription = `
Software Engineer Intern / Entry-Level Software Developer

Location: Pune / Bangalore / Remote
Employment Type: Internship / Full-time

About the Role:
We are looking for a passionate and motivated Computer Science graduate or final-year student to join our engineering team. As a Software Engineer, you will work on building scalable applications, writing clean and efficient code, and collaborating with cross-functional teams to deliver high-quality software solutions.

Key Responsibilities:

Design, develop, test, and deploy web applications and backend services
Write clean, maintainable, and efficient code following best practices
Work with frontend technologies such as HTML, CSS, and JavaScript frameworks
Develop and integrate RESTful APIs
Collaborate with team members using version control systems like Git
Debug, troubleshoot, and optimize application performance
Participate in code reviews and contribute to improving development processes

Required Skills and Qualifications:

Bachelor’s degree in Computer Science or related field (or pursuing)
Strong understanding of Data Structures and Algorithms
Proficiency in at least one programming language such as C++, Java, or Python
Basic knowledge of web development (HTML, CSS, JavaScript)
Familiarity with databases such as MySQL or MongoDB
Understanding of OOP concepts and software development fundamentals

Preferred Qualifications:

Experience with frameworks such as React.js, Node.js, or Express.js
Knowledge of version control tools like Git and GitHub
Basic understanding of cloud platforms (AWS, Azure, or GCP)
Exposure to Machine Learning or Data Science concepts
Experience in building personal or academic projects

Soft Skills:

Strong problem-solving and analytical thinking
Good communication and teamwork abilities
Ability to learn quickly and adapt to new technologies
Self-motivated with a proactive attitude

What We Offer:

Hands-on experience with real-world projects
Mentorship from experienced engineers
Opportunity to convert internship into full-time role
Collaborative and growth-oriented work environment
`;

const prompt = `{
  "title": "Software Engineer Intern - Interview Report for Ananya Deshmukh",
  "matchScore": 88,
  "technicalQuestions": [
    {
      "question": "Explain how your AI Resume Parser extracts structured information from unstructured resume data.",
      "intention": "To evaluate understanding of NLP pipelines, text preprocessing, and entity extraction techniques.",
      "answer": "Start by explaining the pipeline: input document parsing (PDF/DOCX using libraries like PyMuPDF or python-docx), followed by text cleaning and preprocessing. Then describe how SpaCy is used for tokenization and Named Entity Recognition. Mention custom training for domain-specific entities like skills and education. Conclude with how extracted data is structured into JSON for downstream use."
    },
    {
      "question": "How does your Movie Recommendation System work and what algorithm did you use?",
      "intention": "To assess knowledge of recommendation systems and similarity metrics.",
      "answer": "Explain that the system uses collaborative filtering. Describe how user-item interaction matrices are built and cosine similarity is used to find similar users or items. Mention handling sparse data and improving recommendations using normalization techniques."
    },
    {
      "question": "How did you design and secure your Expense Tracker API?",
      "intention": "To test backend development and API security knowledge.",
      "answer": "Explain the use of Django REST Framework for API development. Describe JWT-based authentication for securing endpoints. Mention using middleware or permission classes to restrict access and ensuring users can only access their own data."
    },
    {
      "question": "What are the differences between PostgreSQL and MongoDB, and why did you choose PostgreSQL?",
      "intention": "To evaluate database design decisions.",
      "answer": "Explain that PostgreSQL is a relational database suitable for structured data with strong ACID compliance, while MongoDB is NoSQL and flexible for unstructured data. Mention choosing PostgreSQL for consistency, complex queries, and relationships."
    },
    {
      "question": "Explain how Docker helps in development and deployment.",
      "intention": "To assess knowledge of DevOps practices.",
      "answer": "Explain that Docker allows containerization of applications, ensuring consistent environments across development and production. Mention benefits like dependency isolation, portability, and easier deployment."
    }
  ],
  "behavioralQuestions": [
    {
      "question": "Describe a challenging problem you faced during your internship and how you solved it.",
      "intention": "To assess problem-solving ability and real-world experience.",
      "answer": "Use the STAR method. Explain the situation (slow API performance), task (identify bottleneck), action (analyzed queries, added indexing, optimized code), and result (improved response time)."
    },
    {
      "question": "How do you handle learning a new technology quickly?",
      "intention": "To evaluate learning ability and adaptability.",
      "answer": "Explain a structured approach: understanding fundamentals, following documentation, building small projects, and practicing consistently. Mention examples like learning Django or Docker."
    },
    {
      "question": "Tell me about a time you worked in a team and faced a disagreement.",
      "intention": "To evaluate teamwork and communication skills.",
      "answer": "Describe a real scenario, explain how you listened to all viewpoints, discussed trade-offs, and reached a consensus that benefited the project."
    }
  ],
  "skillGaps": [
    {
      "skill": "Advanced System Design",
      "severity": "medium"
    },
    {
      "skill": "Frontend Frameworks (React/Next.js)",
      "severity": "medium"
    },
    {
      "skill": "Cloud Deployment (AWS/Azure)",
      "severity": "low"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "Data Structures and Algorithms",
      "tasks": [
        "Revise arrays and linked lists",
        "Solve 5 medium-level coding problems",
        "Review time and space complexity"
      ]
    },
    {
      "day": 2,
      "focus": "Backend Development",
      "tasks": [
        "Build a simple REST API using Django",
        "Practice JWT authentication implementation",
        "Understand middleware and request lifecycle"
      ]
    },
    {
      "day": 3,
      "focus": "Database Concepts",
      "tasks": [
        "Practice SQL joins and queries",
        "Study indexing and query optimization",
        "Compare SQL vs NoSQL use cases"
      ]
    },
    {
      "day": 4,
      "focus": "Machine Learning Basics",
      "tasks": [
        "Revise TF-IDF and classification algorithms",
        "Implement a simple ML model",
        "Understand model evaluation metrics"
      ]
    },
    {
      "day": 5,
      "focus": "System Design Basics",
      "tasks": [
        "Learn client-server architecture",
        "Study load balancing and caching",
        "Design a basic scalable system"
      ]
    },
    {
      "day": 6,
      "focus": "DevOps and Deployment",
      "tasks": [
        "Learn Docker basics",
        "Containerize a simple application",
        "Understand CI/CD pipelines"
      ]
    },
    {
      "day": 7,
      "focus": "Mock Interviews and Revision",
      "tasks": [
        "Practice technical interview questions",
        "Prepare behavioral answers using STAR method",
        "Revise key concepts and weak areas"
      ]
    }
  ]
}
`
export { resume, selfDescription, jobDescription };