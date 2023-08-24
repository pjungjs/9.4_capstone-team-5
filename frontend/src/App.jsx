import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/common/NavBar.jsx';
import Footer from './components/common/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <header className="sticky top-0 w-full">
          <NavBar />
        </header>
        <main className="flex h-screen justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
