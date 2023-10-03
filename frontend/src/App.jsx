import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollTop from './utils/scrollTop.js';
import NavBar from './components/common/NavBar.jsx';
import Footer from './components/common/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import LoginAuth from './components/Login/LoginAuth.jsx';
import PrivateRoutes from './components/User/PrivateRoutes.jsx';
import UserMain from './components/User/UserMain.jsx';
import Forum from './pages/ForumTopic.jsx';
import ForumTopic from './pages/Forum.jsx';
import CommunityForum from './pages/CommunityForum.jsx';
import PostDetails from './components/Posts/PostDetails.jsx';
import Actions from './components/Actions/Actions.jsx';
import ActionDetails from './components/Actions/ActionDetails.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/auth" element={<LoginAuth />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/topic/:id" element={<ForumTopic />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/actions/:slug" element={<ActionDetails />} />
            <Route path="/community-forum" element={<CommunityForum />} />
            <Route path="/community-forum/post/:slug" element={<PostDetails />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/user/*" element={<UserMain />} />
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
