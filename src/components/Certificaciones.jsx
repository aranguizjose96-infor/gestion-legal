// Certificaciones.jsx
// ------------------------------------------------------
// Sección de CERTIFICADOS Y ACREDITACIONES (requisito
// específico del tema 17). Es una sección más simple,
// sin estado complejo: muestra una grilla de insignias
// que dan respaldo y confianza a la gestoría.
// ------------------------------------------------------

import { Container, Row, Col } from 'react-bootstrap'
import './Certificaciones.css'

// Arreglo con cada certificación: ícono, nombre y una breve
// descripción de qué garantiza esa acreditación.
const certificaciones = [
  {
    icono: 'bi-patch-check-fill',
    nombre: 'Colegio de Contadores de Chile',
    descripcion: 'Profesionales colegiados y habilitados.',
  },
  {
    icono: 'bi-shield-lock-fill',
    nombre: 'Certificación ISO 9001',
    descripcion: 'Gestión de calidad en nuestros procesos.',
  },
  {
    icono: 'bi-award-fill',
    nombre: 'SII - Facilitador Autorizado',
    descripcion: 'Trámites tributarios oficiales y validados.',
  },
  {
    icono: 'bi-lock-fill',
    nombre: 'Protección de Datos',
    descripcion: 'Confidencialidad total de tu información.',
  },
]

function Certificaciones() {
  return (
    <section id="certificaciones" className="certificaciones-section">
      <Container>
        <h2 className="titulo-seccion titulo-claro">Certificaciones y Respaldo</h2>
        <p className="subtitulo-seccion subtitulo-claro">
          Trabajamos bajo los más altos estándares de calidad y seguridad
          profesional.
        </p>

        <Row className="g-4 justify-content-center">
          {certificaciones.map((cert, index) => (
            <Col xs={6} md={3} key={index}>
              <div className="cert-card">
                <i className={`bi ${cert.icono} cert-icono`}></i>
                <h5 className="cert-nombre">{cert.nombre}</h5>
                <p className="cert-descripcion">{cert.descripcion}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Certificaciones