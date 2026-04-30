# 🚀 AI Code Reviewer

Fix errors instantly, improve readability, and boost code quality with an AI-powered code reviewer. Smart, fast, and developer-friendly — built for modern projects.

AI Code Reviewer helps developers identify bugs, improve code readability, and get instant suggestions for cleaner, maintainable code. It supports multiple languages and gives detailed, structured feedback in real-time.

---

## 🔥 Features

- AI-Powered Code Review – Automatically detect errors and bad practices
- Smart Code Analysis – Checks readability, performance, and complexity
- Instant Feedback – Get results in seconds
- Copy/Paste Code Support – Supports any programming language
- Clean & Responsive UI – Works on all devices
- Secure & Scalable Backend – CORS enabled and robust error handling

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- Markdown Renderer

### Backend
- Node.js + Express
- Groq API
- CORS setup
- Error handling middleware

---

## ⚙️ Setup Instructions

### Backend Setup
1. Go to the backend folder  
2. Run: cd backend  
3. Run: npm install  
4. Run: npm start 

Create a .env file with:
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.3-70b-versatile

### Frontend Setup
1. Go to the frontend folder  
2. Run: cd frontend 
3. Run: npm install  
4. Run: npm run dev  

For local development, the frontend uses http://localhost:5000 by default.
For deployment, add this environment variable in your frontend host:
VITE_API_BASE_URL=your_render_deploy_url

---

## 🌐 Environment Setup

Update backend URL in your frontend host:
VITE_API_BASE_URL=your_render_deploy_url

Make sure the frontend Axios URL matches your deployed backend endpoint.

---

## 🚀 Deployment

### Backend
Deploy on:
- Render

### Frontend
Deploy on:
- Vercel (recommended)

---

## 🧠 How It Works

1. User pastes code into input area
2. Frontend sends code to backend via an API request
3. Backend sends the code to the AI model for analysis
4. AI returns a structured response with improvements and suggestions
5. Frontend displays the response in Markdown format

---

## ⭐ Feedback & Support

If you find this project helpful:

- Give it a ⭐ on GitHub
- Create issues for suggestions or feedback

Your support keeps the project growing! ❤️

---

## 📜 License

This project is licensed under the MIT License.

