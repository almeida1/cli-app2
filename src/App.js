import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClienteCadastrarView from "./componentes/cadastrar_cliente/ClienteCadastrarView";
import ClienteConsulta from "./componentes/consulta/ClienteConsulta";
import Menu from "./componentes/menu/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/cadastrar" element={<ClienteCadastrarView />} />
        <Route path="/consultar" element={<ClienteConsulta />} />
      </Routes>
    </Router>
  );
}

export default App;
