# Portfoolio näidis
## React + Vite

## Etapid
- `npm create vite@latest` react SWC
- Lehe osade ja lehekülgede komponendid
- Mitme lehe tugi, ehk ruutimine (routing) `npm install --save react-router-dom` [React Routeri juhised](https://reactrouter.com/en/main/start/tutorial)
- Routeri seadistamine:  
```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes> {/* Wrapi Route komponendid Routes komponendiga */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
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
- Github pages'i seadisatmine: https://vitejs.dev/guide/static-deploy
- Kasutades github pages'it, siis vaja vite.config.js määrata `base: "/react-01-portfoolio"` ja samuti App.jsx'is `<Router basename="/react-01-portfoolio/">` See on antud juhul github pagesi aadress. Teisel juhul muidugi teistsugune.
- Install Stylex: `npm install --save @stylexjs/stylex` Install Vite stylex: npm install --save-dev vite-plugin-stylex setup: https://blog.logrocket.com/exploring-stylex-new-generation-styling-libraries/
- 