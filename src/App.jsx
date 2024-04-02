import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Importi Header komponent
import Footer from './components/Footer'; // Importi Footer komponent
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
// Importi teised lehtede komponendid

function App() {
  return (
    <Router>
      <Header />
      <Routes> {/* Wrapi Route komponendid Routes komponendiga */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* Defineeri siin teised marsruudid */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
