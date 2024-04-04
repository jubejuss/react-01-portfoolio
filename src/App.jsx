import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage.jsx';
// Importi teised lehtede komponendid

// Tingimuslik basename väärtus
const basename = process.env.NODE_ENV === 'production' ? '/react-01-portfoolio/' : '/';

function App() {
  return (
    <Router basename={basename}> { /* Browseri aadressiribal kuvatav osa, sõltuvuses vite.confif.js'is määratud base-st. Hetkel vajalik selline, kuna see on see, mis github pagesi aadress */ }
      <Header />
      <main>
        <Routes>  
          <Route path="/" element={<HomePage />} />
          <Route path="/projektid" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
