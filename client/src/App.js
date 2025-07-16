import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestConnection from './components/TestConnection'; // ✅ Added

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="scroll-smooth min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* ✅ Add TestConnection at the top */}
        <div className="p-4">
          <TestConnection />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
