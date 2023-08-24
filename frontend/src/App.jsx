import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/common/NavBar.jsx';
import Footer from './components/common/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import ScrollToTop from './utils/ScrollToTop.js';
import Questionnaire from './pages/Questionnaire.jsx';

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <header className="sticky top-0 w-full">
          <NavBar />
        </header>
        <main className="flex h-screen justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/calculator" element={<Questionnaire />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
