import './App.css'
import HomePage from './pages/jsx/HomePage'
import AboutUs from './pages/jsx/AboutUs'
import Footer from './pages/jsx/Footer'
import MySection from './pages/jsx/forTest/test'
import ProjectsPage2 from './pages/jsx/projectsPage'
import TeamPage from './pages/jsx/teamPage'
import InstagramFeed from './pages/jsx/InstagramFeed'
import { useState, useEffect } from "react";
import Loader from "./components/loader";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <HomePage />
      <AboutUs />
      <TeamPage />
      <ProjectsPage2 />
      <InstagramFeed />
      <Footer />
    </main>
  )
}
export default App


