import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollTop from './utils/scrollTop.js';
import NavBar from './components/common/NavBar.jsx';
import Footer from './components/common/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Questionnaire from './pages/Questionnaire.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Forum from './pages/Forum.jsx';
import ForumTopic from './pages/ForumTopic.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <header className="sticky top-0 w-full">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/topic/:id" element={<ForumTopic />} />
            <Route path="/calculator" element={<Questionnaire />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
