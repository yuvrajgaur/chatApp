# 💬 ChatriX - Real-Time Chat Application

ChatriX is a full-stack real-time messaging application built using the MERN stack. It enables secure one-to-one communication with instant message delivery, online user tracking, profile management, and image sharing.

## 🚀 Features

- 🔐 JWT Authentication with secure HTTP-only cookies
- 💬 Real-time one-to-one messaging using Socket.IO
- 🟢 Live online/offline user status
- 🖼️ Profile picture upload via Cloudinary
- 📱 Responsive UI with 30+ customizable themes
- 🔒 Protected API routes using authentication middleware
- ☁️ MongoDB Atlas for cloud database storage
- ⚡ Fast and modern frontend built with React & Vite

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Zustand
- Tailwind CSS
- DaisyUI
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- Cookie Parser
- Cloudinary

---

## 📂 Project Structure

```
chatrix/
│
├── frontend/
│   ├── src/
│   └── public/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── lib/
│   │   └── seeds/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/chatrix.git
cd chatrix
```

### Backend

```bash
cd backend
npm install
npm run server
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGODB_URI=
JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

PORT=5001
NODE_ENV=development
```

Create a `.env` file inside the frontend folder.

```env
VITE_API_URL=http://localhost:5001/api
VITE_SOCKET_URL=http://localhost:5001
```

---

## 📸 Screenshots

Add screenshots of:

- Login Page
- Signup Page
- Home Page
- Chat Window
- Profile Page

---

## 🌐 Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
- Image Storage: Cloudinary

---

## 📌 Future Improvements

- Friend Requests
- Group Chats
- Read Receipts
- Typing Indicators
- Message Search
- Push Notifications

---

## 👨‍💻 Author

**Yuvraj Singh Gaur**

If you found this project useful, consider giving it a ⭐ on GitHub.
