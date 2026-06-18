const res = {
  title: "Software Engineer Intern",
  matchScore: 90,
  technicalQuestions: [
    {"question": "Describe the core functionalities of the AI Resume Parser you built. What were the main challenges in extracting structured information from diverse resume formats?", "intention": "To assess understanding of NLP, data extraction, and problem-solving in a practical project.", "answer": "The candidate should explain the use of Python libraries like SpaCy for Named Entity Recognition (NER) to identify key information such as education, experience, and skills. Challenges might include handling variations in formatting, different terminology, and incomplete data, which they addressed using custom entity recognition and potentially rule-based systems."},
    {"question": "For your Movie Recommendation System, can you explain the difference between collaborative filtering and content-based filtering, and why you chose collaborative filtering?", "intention": "To evaluate understanding of recommendation system algorithms and trade-offs.", "answer": "The candidate should explain that collaborative filtering uses user-item interaction history to find similar users or items, while content-based filtering recommends items similar to those a user liked based on item features. They might have chosen collaborative filtering due to availability of user interaction data or to discover serendipitous recommendations."},
    {"question": "In your Expense Tracker API, how did you implement user authentication and ensure data security?", "intention": "To gauge knowledge of backend security practices and API development.", "answer": "The candidate should mention using Django's built-in authentication system or JWT (JSON Web Tokens) for securing API endpoints. They might also discuss password hashing, input validation, and secure handling of sensitive financial data."},
  ],
  behavioralQuestions: [
    {"question": "Tell me about a time you faced a significant technical challenge during your internship at XYZ Software. How did you approach it, and what was the outcome?", "intention": "To assess problem-solving skills, resilience, and ability to learn from challenges.", "answer": "The candidate should use the STAR method to describe a specific challenge, such as optimizing a slow database query or resolving a complex bug. They should detail their thought process, the steps taken to diagnose and fix the issue, and the positive impact of their solution."},
    {"question": "Your resume shows a strong interest in AI and backend systems. How do you prioritize learning new technologies in these rapidly evolving fields?", "intention": "To understand their learning strategies and passion for the domain.", "answer": "The candidate should describe a proactive approach to learning, perhaps mentioning following industry blogs, taking online courses (like the ones they have), experimenting with personal projects, and actively seeking mentorship."},
  ],
  skillGaps: [
    {"skill": "Frontend Development (HTML, CSS, JavaScript frameworks like React/Vue)", "severity": "medium"},
    {"skill": "Cloud Platform Exposure (AWS/Azure/GCP)", "severity": "medium"},
    {"skill": "Automated Testing (Unit, Integration)", "severity": "medium"},
  ],
  preparationPlan: [
    {"day": 1, "focus": "Core CS Fundamentals", "tasks": ["Review Data Structures (Trees, Graphs) and Algorithms (Dynamic Programming)", "Solve 3 medium-level LeetCode problems related to these topics"]},
    {"day": 2, "focus": "Web Development Fundamentals", "tasks": ["Brush up on HTML, CSS, and vanilla JavaScript", "Complete a basic tutorial on a JavaScript framework like React"]},
    {"day": 3, "focus": "Backend Development & APIs", "tasks": ["Deep dive into Django REST Framework best practices", "Practice designing and implementing RESTful APIs for common scenarios"]},
    {"day": 4, "focus": "Database Management", "tasks": ["Review SQL optimization techniques", "Explore NoSQL database concepts (e.g., MongoDB)"]},
    {"day": 5, "focus": "AI/ML Concepts", "tasks": ["Revisit core ML algorithms (e.g., regression, classification)", "Understand model evaluation metrics"]},
    {"day": 6, "focus": "Cloud & DevOps Basics", "tasks": ["Complete an introductory tutorial on AWS or another cloud provider", "Learn about containerization with Docker basics"]},
    {"day": 7, "focus": "Project Walkthrough & Behavioral", "tasks": ["Prepare to discuss personal projects in detail using STAR method", "Practice explaining technical concepts clearly and concisely"]},
  ],
};
