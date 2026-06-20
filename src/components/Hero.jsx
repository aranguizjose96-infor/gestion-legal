// Hero.jsx
// ------------------------------------------------------
// Sección principal (la primera que ve el usuario al entrar).
// Contiene: título de impacto, descripción breve, botón CTA
// (Call To Action) principal y un botón secundario.
// Usamos el grid system de Bootstrap (Row/Col) para que el
// contenido se acomode bien en mobile, tablet y desktop.
// ------------------------------------------------------

import { Container, Row, Col } from 'react-bootstrap'
import './Hero.css'

function Hero() {
  return (
    // El id="inicio" permite que el link de la navbar
    // "#inicio" haga scroll automático hasta aquí
    <section id="inicio" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">

          {/* Columna izquierda: texto y botones.
              En mobile ocupa 12 columnas (ancho completo),
              en pantallas md+ ocupa 7 de 12 */}
          <Col xs={12} md={7} className="hero-texto">
            {/* Pequeña etiqueta superior, da contexto rápido */}
            <span className="hero-etiqueta fade-in-up">
              <i className="bi bi-patch-check-fill me-1"></i>
              Gestoría y Asesoría Contable
            </span>

            <h1 className="hero-titulo fade-in-up">
              Gestionamos tu empresa,
              <span className="text-dorado"> tú enfócate en crecer</span>
            </h1>

            <p className="hero-descripcion fade-in-up">
              En <strong>GestionLegal</strong> simplificamos la contabilidad,
              tributación y trámites legales de tu negocio con un equipo de
              profesionales certificados. Tranquilidad y respaldo, sin
              complicaciones.
            </p>

            <div className="hero-botones fade-in-up">
              {/* CTA principal: lleva directo al formulario de contacto */}
              <a href="#contacto" className="btn-principal btn-lg me-3">
                Agenda una Consulta Gratis
              </a>
              {/* CTA secundario: lleva a la sección de servicios */}
              <a href="#servicios" className="btn-secundario btn-lg">
                Ver Servicios
              </a>
            </div>

            {/* Pequeños indicadores de confianza (datos rápidos) */}
            <div className="hero-stats fade-in-up">
              <div className="stat-item">
                <h3>+12</h3>
                <p>Años de experiencia</p>
              </div>
              <div className="stat-item">
                <h3>+300</h3>
                <p>Empresas asesoradas</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Online</p>
              </div>
            </div>
          </Col>

          {/* Columna derecha: imagen/ilustración.
              Se oculta en mobile (d-none) y aparece desde md+ (d-md-block)
              para no sobrecargar la pantalla pequeña */}
          <Col xs={12} md={5} className="d-none d-md-block text-center">
            <div className="hero-imagen-wrapper">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
                alt="Asesoría contable y legal profesional"
                className="hero-imagen img-fluid"
              />
            </div>
          </Col>

        </Row>
      </Container>

      {/* Flecha animada que invita a seguir bajando ("scroll down") */}
      <a href="#servicios" className="scroll-down-indicator">
        <i className="bi bi-chevron-double-down"></i>
      </a>
    </section>
  )
}

export default Hero