import './App.css'
import HomePage from './pages/jsx/HomePage'
import AboutUs from './pages/jsx/AboutUs'
import Footer from './pages/jsx/Footer'
import MySection from './pages/jsx/forTest/test'
import ProjectsPage from './pages/jsx/projectsPage'
import { useState, useEffect } from "react";
import Loader from "./components/loader";
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // مثلاً ننتظر 2 ثانية قبل إزالة اللودر
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <HomePage/>
      <AboutUs/>
      <ProjectsPage/>
      {/* <MySection/> */}
      <Footer/>
    </main>
  )
}
export default App


