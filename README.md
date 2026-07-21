# Story Inn Lite

A full-stack storytelling platform being built as a learning project.

![Story Inn Hero](https://via.placeholder.com/800x400?text=Story+Inn+Hero) <!-- Replace with a real screenshot later -->

## ✨ About the Project

**Story Inn** is a digital haven for storytellers and readers. Whether you're an aspiring writer wanting to share your imagination chapter by chapter or a reader looking for your next unforgettable story, Story Inn aims to create a warm, engaging community around the art of storytelling.

This repository contains the **Lite** version — a learning-focused implementation that started as a frontend landing page and is evolving into a full-stack application.

## 🎯 Features (Current)

### Frontend (React + Vite)
- **Modern, clean UI** with a cozy, bookish aesthetic
- **Responsive design** (mobile-friendly)
- **Hero section** with clear calls-to-action
- **Features showcase** highlighting core value propositions:
  - Discover great stories across genres
  - Share your own stories (chapter-by-chapter)
  - Build your personal library
- **Featured Stories** carousel/grid with sample data
- **Reusable components** (Navbar, Button, StoryCard, FeatureCard, etc.)
- Clean component architecture and CSS modules/organized styles

### Tech Stack
- **Frontend**: React 19, Vite, JavaScript
- **Styling**: Vanilla CSS (with component-specific files)
- **Linting**: ESLint + React plugins
- **Build Tool**: Vite (fast development & optimized builds)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ananyabajpai729-ctrl/story-inn.git
   cd story-inn```
2. **Navigate to the client folder**
     ```
     cd client
     ```
3. **Install Dependencies**
 ```npm install```
4. **Run the development server**
   ```
   npm run dev
   ```
5. **Open http://localhost:5173 (or the port shown in your terminal) to view the app.**

**Available Scripts**
```
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### 📁 Project Structure
    story-inn/
    ├── client/                 # React + Vite frontend
    │   ├── src/
    │   │   ├── components/     # Reusable UI components
    │   │   │   ├── Button.jsx
    │   │   │   ├── FeatureCard.jsx
    │   │   │   ├── FeaturedStories.jsx
    │   │   │   ├── FeaturesSection.jsx
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Hero.jsx
    │   │   │   ├── Navbar.jsx
    │   │   │   └── StoryCard.jsx
    │   │   ├── pages/
    │   │   │   └── Home.jsx
    │   │   ├── styles/         # Component-specific styles
    │   │   ├── App.jsx
    │   │   └── main.jsx
    │   ├── index.html
    │   ├── vite.config.js
    │   ├── package.json
    │   └── ...
    ├── README.md
    └── package-lock.json



## 🛣️ Roadmap / Future Plans

- Backend (Node.js/Express or Next.js API routes)
- Database (MongoDB/PostgreSQL) for users, stories, chapters
- Authentication (Login/Signup, user profiles)
- Story Creation & Chapter Management
- Reading Experience with progress tracking
- Search & Discovery features
- Comments & Community Interaction
- Deployment (Vercel/Netlify for frontend, Render/Heroku/etc. for backend)

## 🤝 Contributing

This is a learning project — contributions and feedback are very welcome!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

## ❤️ Acknowledgments

- Built as a hands-on learning project to master modern React, component design, and full-stack development.
- Thanks to the React and Vite communities for excellent tooling.

---

**Made with ❤️ by [Ananya Bajpai](https://github.com/ananyabajpai729-ctrl)**

*Star the repo if you like the direction it's heading!*
