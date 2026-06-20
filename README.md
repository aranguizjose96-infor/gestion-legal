# GestionLegal — Landing Page

Landing page profesional para **GestionLegal**, una gestoría y asesoría
contable, desarrollada como proyecto final de la asignatura
**Desarrollo Web Avanzado** (INACAP, Sede Renca).

**Tema asignado:** 17 — GestionLegal, Gestoría y Asesoría Contable.

## 🚀 Tecnologías utilizadas

- **React 19** — librería UI basada en componentes
- **Vite 8** — bundler y servidor de desarrollo
- **pnpm** — gestor de paquetes
- **Bootstrap 5** + **react-bootstrap** — estilos y componentes (Navbar, Accordion, Modal, Form)
- **Bootstrap Icons** — iconografía
- **CSS personalizado** — paleta de colores, animaciones y transiciones propias

## 📋 Funcionalidades implementadas

- ✅ Navbar responsivo con menú hamburguesa (sticky, cambia de estilo al hacer scroll)
- ✅ Hero section con imagen de fondo, animaciones de entrada y CTA principal
- ✅ Acordeón funcional con los servicios de la gestoría
- ✅ Calculadora interactiva de honorarios (useState + useEffect en tiempo real)
- ✅ Tarjetas de casos de éxito + Modal con detalle
- ✅ Sección de certificaciones y acreditaciones
- ✅ Formulario de contacto con validación de campos (regex, mensajes de error)
- ✅ Footer corporativo con newsletter y links de navegación
- ✅ Diseño responsivo: 360px (mobile), 768px (tablet), 1920px (desktop)

## 📁 Estructura del proyecto

gestion-legal/
├── index.html
├── package.json
├── vite.config.js
└── src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── Hero.jsx / Hero.css
│   ├── Servicios.jsx / Servicios.css
│   ├── Calculadora.jsx / Calculadora.css
│   ├── Casos.jsx / Casos.css
│   ├── Certificaciones.jsx / Certificaciones.css
│   ├── Contacto.jsx / Contacto.css
│   └── Footer.jsx / Footer.css
├── App.jsx
├── App.css
└── main.jsx