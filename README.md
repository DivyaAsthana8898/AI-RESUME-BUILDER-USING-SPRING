# 🧠 AI Resume Builder (Spring Boot + React)

An AI-powered resume builder that turns a simple, free-form description of yourself into a polished, professional resume — instantly. Built with a **Spring Boot** backend, a **React** frontend, and powered by **Groq's LLM API**.

**🔗 Live Demo:** [ai-resume-builder-using-spring-boot.onrender.com](https://ai-resume-builder-using-spring-boot.onrender.com/)

---

## ✨ Overview

Writing a resume from scratch is tedious. This app removes that friction — you type a few lines about your background, skills, and experience, and the AI does the heavy lifting of structuring it into a clean, ready-to-edit resume format.

## 🖼️ Screenshots

**Landing Page**
![Landing Page](screenshots/home-page.png)

**AI Description Input**
![AI Description Input](screenshots/description-input.png)

**Auto-Generated Resume Form**
![Generated Resume Form](screenshots/resume-form.png)

## 🚀 Features

- 📝 **Natural language input** — describe yourself in plain text, no rigid forms required upfront
- 🤖 **AI-powered generation** — Groq LLM parses your description into structured resume data
- 📋 **Editable resume form** — auto-filled fields (name, email, phone, location, LinkedIn, GitHub, portfolio, etc.) that you can review and tweak
- ⚡ **Fast, responsive UI** — built with React and a clean, dark-themed interface
- 🔌 **REST API backend** — Spring Boot service handles AI requests and resume data processing
- ☁️ **Deployed and live** — hosted on Render as a full-stack web app

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|--------------------------------------|
| Frontend     | React, Vite, JavaScript/CSS          |
| Backend      | Java, Spring Boot                    |
| AI Engine    | Groq API (LLM inference)             |
| Deployment   | Render (Static Site + Web Service)   |
| Build Tools  | Maven (backend), npm (frontend)      |

## 📁 Project Structure

```
AI-RESUME-BUILDER-USING-SPRING/
├── resume-ai-backend/     # Spring Boot backend (REST API + Groq integration)
├── resume_frontend/       # React frontend (UI for input + resume form)
└── README.md
```

## ⚙️ Getting Started Locally

### Prerequisites
- Java 17+
- Maven
- Node.js & npm
- A [Groq API key](https://console.groq.com/)

### 1. Clone the repository
```bash
git clone https://github.com/DivyaAsthana8898/AI-RESUME-BUILDER-USING-SPRING.git
cd AI-RESUME-BUILDER-USING-SPRING
```

### 2. Backend setup
```bash
cd resume-ai-backend
```
Add your Groq API key in `src/main/resources/application.properties`:
```properties
groq.api.key=YOUR_GROQ_API_KEY
```
Then run:
```bash
mvn spring-boot:run
```

### 3. Frontend setup
```bash
cd resume_frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173` (default Vite port) and the backend on `http://localhost:8080` (default Spring Boot port).

> ⚠️ Make sure the frontend's API base URL points to your backend's address (`localhost` for local dev, the deployed backend URL in production).

## ☁️ Deployment

- **Frontend** — deployed as a Static Site on Render (`resume_frontend`, build output: `dist`)
- **Backend** — deployed as a Web Service on Render (Spring Boot, Dockerized)

## 👩‍💻 Author

**Divya Asthana**
[GitHub](https://github.com/DivyaAsthana8898)

---

⭐ If you found this project interesting, consider giving it a star on GitHub!
