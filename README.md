# Portfoolio näidis
## React + Vite

## Etapid
- `npm create vite@latest` react SWC
- Lehe osade ja lehekülgede komponendid
- Mitme lehe tugi, ehk ruutimine (routing) `npm install --save react-router-dom` [React Routeri juhised](https://reactrouter.com/en/main/start/tutorial)
- Routeri seadistamine:  
```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ... [importi teised vajalikud komponendid]

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
```
Ja headerisse või kuhu iganes menüü tuleb:
```javascript
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Avaleht</Link>
      <Link to="/blog">Blogi</Link>
      {/* Lisa siia teisi linke */}
    </nav>
  );
};
```
