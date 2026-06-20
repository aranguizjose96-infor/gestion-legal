// main.jsx
// ------------------------------------------------------
// Este es el punto de entrada de la aplicación React.
// Aquí se monta el componente principal (App) dentro del
// elemento HTML con id="root" (ubicado en index.html).
// ------------------------------------------------------

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Importamos los estilos de Bootstrap PRIMERO.
// El orden importa: Bootstrap debe cargarse antes que
// nuestros estilos personalizados (App.css) para que
// nuestras reglas CSS puedan sobreescribir las de Bootstrap.
import "bootstrap/dist/css/bootstrap.min.css";

// Importamos los iconos de Bootstrap (usaremos clases como
// "bi bi-telephone" en navbar, footer, tarjetas, etc.)
import "bootstrap-icons/font/bootstrap-icons.css";

// Bootstrap también tiene componentes con JS (como su sistema
// de colapso para acordeones nativos). react-bootstrap ya trae
// su propia lógica en React, así que NO es obligatorio importar
// bootstrap/dist/js/bootstrap.bundle.min.js, pero lo dejamos
// comentado por si se necesita en el futuro:
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import "./App.css"; // Nuestros estilos y variables personalizadas
import App from "./App.jsx";

// createRoot conecta React con el DOM real.
// StrictMode ayuda a detectar errores y malas prácticas en desarrollo
// (no afecta la versión final/producción).
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
