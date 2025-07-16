# 💼 MERN Portfolio

A responsive and dynamic full-stack developer portfolio built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. This project showcases personal information, skills, projects, education, experience, and a contact form — fully integrated from frontend to backend.

---

## 🧩 Tech Stack Used

### 🔷 Frontend (React)
- React (CRA)
- React Router DOM
- CSS Modules for scoped styling
- Particle.js background animation
- Custom reusable components (Navbar, Footer, ProjectCard, SkillBar)
- Pages: Home, About, Projects, Skills, Experience, Contact

### 🔷 Backend (Node.js + Express)
- Express.js for REST API routing
- MongoDB & Mongoose for database & schemas
- JWT for secure authentication (optional)
- Controllers for each resource
- API routes:
  - `/api/projects`
  - `/api/skills`
  - `/api/experience`
  - `/api/education`
  - `/api/contact`

---

## 📁 Folder Structure

mern-portfolio/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── middleware/
│ ├── config.js
│ ├── server.js
│ ├── .env.example
│ └── package.json
│
├── client/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── styles/
│ │ ├── index.js
│ │ ├── App.js
│ │ └── index.css
│ └── package.json
│
├── .gitignore
├── README.md


---

## 🌱 Features

- 💻 **Responsive frontend** with modern UI & animations
- ⚙️ **RESTful backend API** to manage content
- 🔐 **Environment variable support** using `.env`
- 📦 **Reusable components** (ProjectCard, SkillBar, etc.)
- 📬 **Contact form** integration to MongoDB
- 🔄 Modular MVC-based folder structure

---

## ⚙️ How to Setup Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/mern-portfolio.git
cd mern-portfolio
cd backend
cp .env.example .env        # Fill in values for MONGO_URI, JWT_SECRET, PORT
npm install
npm run dev                 # Starts the backend server on PORT
.env.example content:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
3️⃣ Setup Frontend
bash
Copy
Edit
cd ../client
npm install
npm start                   # Starts the React app on localhost:3000
