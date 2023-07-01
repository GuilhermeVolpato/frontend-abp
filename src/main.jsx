import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";

import App from "./App";

// Criação da raiz do React para renderizar o aplicativo na página
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> {/* Modo estrito do React para detectar problemas potenciais */}
    <App /> {/* Componente raiz do aplicativo */}
  </React.StrictMode>
);
