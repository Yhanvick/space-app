// App.jsx
import Navbar from "./Componentes/navbar.jsx";
import Astros from "./Componentes/Astros.jsx";
import About from "./Componentes/about.jsx";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Apod from "./Componentes/apod.jsx";
import estrellas from './assets/estrellas.jpg';  // Importa la imagen


function App() {
  const links = [
    { href: '/', text: 'Home' },
    { href: '/astros', text: 'Astros' },
    { href: '/apod', text: 'Apod' },
    { href: '/about', text: 'About' },
  ];

  return (
    <>
      <Navbar classname="navbar" links={links} />
      <div className="pages" >
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-container">
                <img
                  src={estrellas}
                  alt="Imagen del cielo con Estrellas"
                  className="home-img"
                />
              </div>
            }
          />
          <Route path="/astros" element={<Astros />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;



