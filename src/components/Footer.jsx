// Footer.jsx
// ------------------------------------------------------
// PIE DE PÁGINA corporativo (requisito de ambos PDFs).
// Incluye: datos de contacto, links rápidos de navegación,
// redes sociales y una pequeña sección de newsletter (no
// obligatoria, pero suma valor de "novedoso" al sitio).
// ------------------------------------------------------

import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  // Estado simple para el campo de newsletter del footer
  const [emailNewsletter, setEmailNewsletter] = useState('')
  const [suscrito, setSuscrito] = useState(false)

  const manejarSuscripcion = (e) => {
    e.preventDefault()

    // Validación simple: debe contener "@" y un "."
    if (emailNewsletter.includes('@') && emailNewsletter.includes('.')) {
      setSuscrito(true)
      setEmailNewsletter('')
      // Ocultamos el mensaje de confirmación después de 4 segundos
      setTimeout(() => setSuscrito(false), 4000)
    }
  }

  // Año actual calculado automáticamente, así el footer nunca
  // queda con una fecha desactualizada (ej: "© 2024" en pleno 2027)
  const anioActual = new Date().getFullYear()

  return (
    <footer className="footer-section">
      <Container>
        <Row className="gy-4">
          {/* --- Columna 1: Logo y descripción --- */}
          <Col xs={12} md={4}>
            <h4 className="footer-logo">
              <i className="bi bi-bank2 me-2"></i>
              GestionLegal
            </h4>
            <p className="footer-descripcion">
              Gestoría y asesoría contable para que tu empresa cumpla con
              todas sus obligaciones legales y tributarias, sin
              complicaciones.
            </p>
            <div className="footer-redes">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
            </div>
          </Col>

          {/* --- Columna 2: Links rápidos --- */}
          <Col xs={6} md={2}>
            <h6 className="footer-titulo-col">Navegación</h6>
            <ul className="footer-lista">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#calculadora">Calculadora</a></li>
              <li><a href="#casos">Casos de Éxito</a></li>
              <li><a href="#certificaciones">Certificaciones</a></li>
            </ul>
          </Col>

          {/* --- Columna 3: Información de contacto --- */}
          <Col xs={6} md={3}>
            <h6 className="footer-titulo-col">Contacto</h6>
            <ul className="footer-lista">
              <li><i className="bi bi-geo-alt-fill me-2"></i>Av. Renca 1234, Santiago</li>
              <li><i className="bi bi-telephone-fill me-2"></i>+56 2 2345 6789</li>
              <li><i className="bi bi-envelope-fill me-2"></i>contacto@gestionlegal.cl</li>
              <li><i className="bi bi-clock-fill me-2"></i>Lun a Vie, 9:00 - 18:00</li>
            </ul>
          </Col>

          {/* --- Columna 4: Newsletter --- */}
          <Col xs={12} md={3}>
            <h6 className="footer-titulo-col">Newsletter</h6>
            <p className="footer-newsletter-texto">
              Recibe noticias tributarias y tips contables cada mes.
            </p>
            <Form onSubmit={manejarSuscripcion} className="form-newsletter">
              <div className="d-flex gap-2">
                <Form.Control
                  type="email"
                  placeholder="Tu correo"
                  value={emailNewsletter}
                  onChange={(e) => setEmailNewsletter(e.target.value)}
                  size="sm"
                />
                <Button type="submit" size="sm" className="btn-suscribir">
                  <i className="bi bi-send-fill"></i>
                </Button>
              </div>
              {suscrito && (
                <small className="texto-suscrito">
                  <i className="bi bi-check-circle-fill me-1"></i>
                  ¡Suscrito con éxito!
                </small>
              )}
            </Form>
          </Col>
        </Row>

        <hr className="footer-linea" />

        <Row>
          <Col className="text-center">
            <p className="footer-copyright">
              © {anioActual} GestionLegal. Todos los derechos reservados. |
              Proyecto académico — Desarrollo Web Avanzado, INACAP Sede Renca.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer