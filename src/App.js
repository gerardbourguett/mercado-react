import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Acerca from "./pages/Acerca";
import Tabla from "./pages/Tabla";
import Detalle from "./pages/Detalle";
import Financiero from "./pages/Financiero";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <div className="btn-group">
          <NavLink to="/" className="btn btn-dark">
            Inicio
          </NavLink>
          <NavLink to="/licitacion" className="btn btn-dark">
            Licitaciones MP
          </NavLink>
          <NavLink to="/indicadores" className="btn btn-dark">
            Indicadores Financieros
          </NavLink>
          <NavLink to="/contacto" className="btn btn-dark">
            Contacto
          </NavLink>
          <NavLink to="/acerca" className="btn btn-dark">
            Acerca
          </NavLink>
        </div>
        <hr />
        <Routes>
          <Route path="/indicadores" element={<Financiero />} />
          <Route path="/licitacion/:id" element={<Detalle />}></Route>
          <Route path="/licitacion" element={<Tabla />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/acerca" element={<Acerca />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
