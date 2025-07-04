# 📽️ Netflix-GPT

A modern Netflix-inspired web application enhanced with GPT-based movie recommendations. Built with **React**, **Redux Toolkit**, **Tailwind CSS**, **Firebase Authentication**, and **OpenAI GPT-3.5**, this app offers a seamless and intelligent streaming interface experience.

---

## 🚀 Live Demo

🌐 [View Live Application](https://netflix-gpt-bce5d.web.app/)  

---

## ✨ Key Features

### 🔐 Authentication
- Firebase-based **Login / Signup**
- Form validation with custom hooks
- User profile setup (display name & profile picture)
- Route protection: auto-redirects based on auth status
- Clean logout handling with `onAuthStateChanged` unsubscribe

### 🎬 Movie Browsing (Post-Login)
- Now Playing, Popular, and Top Rated movie sections
- Embedded background **autoplay YouTube trailer**
- Movie description and recommendations
- Fully responsive UI with intuitive scrollable movie lists

### 🤖 Netflix-GPT
- GPT-powered search bar to suggest movies
- Multi-language support (English, Tamil, Hindi, etc.)
- Beautiful GPT result display with movie suggestions

### 🌐 Routing & Navigation
- `/login` – Login page  
- `/signup` – Sign-up page  
- `/browse` – Main movie dashboard  
- `/gpt` – GPT-based movie suggestion interface  

---

## 🧩 Tech Stack

| Technology         | Purpose                                  |
|--------------------|-------------------------------------------|
| React.js           | UI development                           |
| Redux Toolkit      | State management                         |
| Tailwind CSS       | Styling framework                        |
| Firebase Auth      | User authentication                      |
| OpenAI API         | GPT-based recommendations                |
| React Router DOM   | Navigation & routing                     |
| YouTube iFrame API | Movie trailer embedding                  |

---

## 🗂️ Project Structure

src/
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks (data fetching, auth)
├── pages/ # App-level views (Browse, GPT Search)
├── store/ # Redux slices and store configuration
├── utils/ # Firebase, OpenAI, language support
└── App.js # App routing and layout

yaml
Copy
Edit

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Naresh620/netflix-gpt.git
cd netflix-gpt
2. Install dependencies
bash
Copy
Edit
npm install
3. Configure Firebase
Create a Firebase project at Firebase Console

Enable Email/Password Authentication

Replace the Firebase config in src/utils/firebase.js with your own config

4. Add OpenAI API Key
Create a .env file at the root of your project and add:

env
Copy
Edit
REACT_APP_OPENAI_KEY=your-openai-api-key
5. Start the development server
bash
Copy
Edit
npm start

🛠️ Development Features Implemented
✅ React App Setup via CRA

✅ Tailwind CSS Integration

✅ Routing with React Router

✅ Login / Signup Forms with Validation

✅ Firebase Authentication

✅ Redux for Global State

✅ Custom Hooks for Data Fetching

✅ Fetch & Store Movie Trailer Data

✅ YouTube Video Embed with Autoplay

✅ GPT Search Bar & Multi-language Toggle

✅ UI Improvements with Tailwind

✅ Responsive, Accessible Layout

🐞 Bug Fixes & Edge Cases Handled
✅ Fixed: User displayName and profile picture update after sign-up

✅ Redirect to login if user is unauthenticated

✅ Prevent memory leaks by unsubscribing from onAuthStateChanged

✅ Dynamic routing post-authentication

📦 Deployment
1. Build the app
bash
Copy
Edit
npm run build
2. Deploy using:
🔗 Netlify

🔗 Vercel

🔗 Firebase Hosting (optional)

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Nareshkrishna M
nareshms2060@gmail.com
📍 Chennai, India
📫 https://www.linkedin.com/in/nareshkrishna8/