// App.jsx
// ------------------------------------------------------
// Componente RAÍZ de la aplicación.
// Su única responsabilidad es ORDENAR las secciones de la
// landing page, una debajo de la otra, en el orden correcto.
// Cada sección vive en su propio componente (carpeta components/)
// ------------------------------------------------------

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Calculadora from './components/Calculadora'
import Casos from './components/Casos'
import Certificaciones from './components/Certificaciones'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Navbar fijo arriba de toda la página */}
      <Navbar />

      {/* Sección principal de bienvenida con CTA */}
      <Hero />

      {/* Acordeón con los servicios de la gestoría */}
      <Servicios />

      {/* Calculadora interactiva de honorarios estimados */}
      <Calculadora />

      {/* Casos de éxito + Modal con detalle */}
      <Casos />

      {/* Certificados y acreditaciones de la empresa */}
      <Certificaciones />

      {/* Formulario de contacto con validación */}
      <Contacto />

      {/* Pie de página corporativo */}
      <Footer />
    </>
  )
}

//hola mundo

export default App