import { useState } from "react";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import AITutor from "./pages/AITutor";
import Notes from "./pages/Notes";
import Flashcards from "./pages/Flashcards";
import Quizzes from "./pages/Quizzes";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "AI Tutor":
        return <AITutor />;

      case "My Notes":
        return <Notes />;

      case "Flashcards":
        return <Flashcards />;

      case "Quizzes":
        return <Quizzes />;

      case "Progress":
        return <Progress />;

      case "Settings":
        return <Settings />;

      case "Dashboard":
      default:
        return (
          <Dashboard
            setActivePage={setActivePage}
          />
        );
    }
  };

  return (
    <Layout
      activePage={activePage}
      setActivePage={setActivePage}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;