# Delta_App 🚀

A simple and clean **Node.js + MySQL CRUD web application** for managing users. Built using Express.js for routing, EJS for templating, and Faker.js for generating dummy users. This app showcases basic database interactions like creating, reading, updating, and deleting user data with password confirmation for updates.

---

## 🌐 Live Demo

Coming soon... (you can deploy it using Render, Vercel, or Railway)

---

## 🔧 Features

- View total user count from MySQL
- List all users with their details
- Edit and update user info
- Password confirmation before updating
- Generates dummy users with Faker.js (optional)
- Built using EJS templating engine

---

## 📁 Project Structure
Delta_App/
│
├── views/ # EJS templates (home, show, edit)
├── index.js # Main server logic
├── schema.sql # MySQL schema
├── .gitignore # Ignored files
├── package.json # Dependencies
└── .env.example # Example environment config


---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Templating:** EJS
- **Mock Data:** @faker-js/faker
- **Others:** method-override, dotenv

---

## 🧪 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/mrankush079/Delta_App.git
cd Delta_App


2. Install dependencies
npm install

3. Configure environment variables
Create a .env file:
DB_PASSWORD=your_mysql_password

4. Setup MySQL database
CREATE DATABASE delta_app;

USE delta_app;

CREATE TABLE user (
  id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);


 Start the development server
node index.js
Visit: http://localhost:8080

🚫 .gitignore
gitignore
Copy
Edit

🙋 Author
Ankush Choudhary







