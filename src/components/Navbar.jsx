// Navbar.jsx
// ------------------------------------------------------
// Barra de navegación CORPORATIVA y RESPONSIVA.
// Usamos los componentes de react-bootstrap (Navbar, Nav,
// Container) porque ya traen integrado el comportamiento
// del menú hamburguesa en pantallas pequeñas (mobile),
// sin que tengamos que programar esa lógica a mano.
// ------------------------------------------------------

import { useState, useEffect } from 'react'
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css'

function Navbar() {
  // Estado que controla si la navbar tiene "fondo sólido"
  // (cuando el usuario hace scroll) o es transparente (arriba del todo).
  const [scrolled, setScrolled] = useState(false)

  // Estado que controla si el menú hamburguesa está abierto o cerrado.
  // Lo usamos para cerrar el menú automáticamente al hacer click
  // en un link (mejor experiencia en mobile).
  const [expanded, setExpanded] = useState(false)

  // useEffect: se ejecuta una vez al montar el componente y
  // "escucha" el evento de scroll de la ventana.
  useEffect(() => {
    const manejarScroll = () => {
      // Si el usuario bajó más de 50px, marcamos scrolled = true
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', manejarScroll)

    // Limpieza: cuando el componente se desmonta, quitamos el listener
    // para evitar fugas de memoria.
    return () => window.removeEventListener('scroll', manejarScroll)
  }, [])

  return (
    <BSNavbar
      expand="lg"           // El menú se expande horizontalmente desde "lg" hacia arriba
      expanded={expanded}   // Controlamos manualmente si está abierto (para cerrarlo al hacer click)
      onToggle={(valor) => setExpanded(valor)} // Se llama cuando se hace click en el botón hamburguesa
      fixed="top"           // Fija la navbar arriba de la pantalla siempre (sticky)
      className={`navbar-gestion ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        {/* Logo / Nombre de la empresa */}
        <BSNavbar.Brand href="#inicio" className="brand-logo">
          <i className="bi bi-bank2 me-2"></i>
          GestionLegal
        </BSNavbar.Brand>

        {/* Botón hamburguesa: react-bootstrap lo muestra automáticamente
            en pantallas pequeñas y lo oculta en pantallas grandes */}
        <BSNavbar.Toggle aria-controls="navbar-principal" />

        <BSNavbar.Collapse id="navbar-principal">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link href="#inicio" onClick={() => setExpanded(false)}>
              Inicio
            </Nav.Link>
            <Nav.Link href="#servicios" onClick={() => setExpanded(false)}>
              Servicios
            </Nav.Link>
            <Nav.Link href="#calculadora" onClick={() => setExpanded(false)}>
              Calculadora
            </Nav.Link>
            <Nav.Link href="#casos" onClick={() => setExpanded(false)}>
              Casos de Éxito
            </Nav.Link>
            <Nav.Link href="#certificaciones" onClick={() => setExpanded(false)}>
              Certificaciones
            </Nav.Link>

            {/* Botón CTA destacado, distinto de los demás links */}
            <Nav.Link
              href="#contacto"
              onClick={() => setExpanded(false)}
              className="btn-contacto-nav ms-lg-2"
            >
              Agenda tu Consulta
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

export default Navbar