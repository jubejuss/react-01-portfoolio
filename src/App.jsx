import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage.jsx';
// Importi teised lehtede komponendid

function App() {
  return (
    <Router basename="/"> { /* Browseri aadressiribal kuvatav osa, sõltuvuses vite.confif.js'is määratud base-st */ }
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
