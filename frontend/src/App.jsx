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
import LoginAuth from './components/Login/LoginAuth.jsx';
import PrivateRoutes from './components/User/PrivateRoutes.jsx';
import UserDashboard from './components/User/UserDashboard.jsx';
import UserSettings from './components/User/UserSettings.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <header className="sticky top-0 z-50">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/auth" element={<LoginAuth />} />
            <Route path="/calculator" element={<Questionnaire />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/user/dashboard" element={<UserDashboard />} />
              <Route path="/user/settings" element={<UserSettings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
