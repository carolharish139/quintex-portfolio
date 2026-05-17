import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Websites from "./pages/Websites";
import Advertising from "./pages/Advertising";
import Projects from "./pages/Projects";
import Applications from "./pages/Applications";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    const moveCursor = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <motion.div
          className="loader-brand"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Quintex<span>Studio</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          Premium Web Experiences
        </motion.p>
      </div>
    );
  }

  return (
    <main>
      <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
      <Footer />
    </main>
  );
}
