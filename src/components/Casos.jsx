// Casos.jsx
// ------------------------------------------------------
// Sección de CASOS DE ÉXITO + MODAL (requisito obligatorio
// del PDF "B"). Mostramos tarjetas resumidas; al hacer click
// en "Ver detalle", se abre un Modal con la información
// completa del caso, usando el componente Modal de
// react-bootstrap (maneja apertura/cierre, fondo oscuro y
// accesibilidad de forma automática).
// ------------------------------------------------------

import { useState } from 'react'
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap'
import './Casos.css'

// Arreglo con la información de cada caso de éxito.
// Cada objeto tiene los datos resumidos (para la tarjeta) y
// el detalle completo (que se muestra solo dentro del Modal).
const casosExito = [
  {
    id: 1,
    icono: 'bi-shop',
    empresa: 'Comercial Andina Ltda.',
    rubro: 'Retail / Comercio',
    resumen: 'Regularización tributaria completa en 3 meses.',
    detalle:
      'Comercial Andina llegó con observaciones del SII pendientes desde hacía 2 años. Nuestro equipo realizó una auditoría completa, regularizó las declaraciones atrasadas y negoció un convenio de pago. Resultado: la empresa quedó 100% al día y redujo sus multas en un 40% gracias a la gestión oportuna.',
  },
  {
    id: 2,
    icono: 'bi-cup-straw',
    empresa: 'Café Boutique del Sur SPA',
    rubro: 'Gastronomía',
    resumen: 'Constitución de empresa y primer año contable.',
    detalle:
      'Acompañamos a los socios desde la constitución legal de su SPA hasta la implementación de un sistema contable digital. En su primer año fiscal, optimizamos su carga tributaria aplicando beneficios para PYMEs, logrando un ahorro estimado de $1.800.000 anuales.',
  },
  {
    id: 3,
    icono: 'bi-truck',
    empresa: 'Transportes Maipo EIRL',
    rubro: 'Logística y Transporte',
    resumen: 'Reestructuración de remuneraciones para 18 trabajadores.',
    detalle:
      'La empresa enfrentaba inconsistencias en liquidaciones de sueldo y cotizaciones previsionales. Implementamos un proceso mensual de remuneraciones automatizado, corregimos pagos previsionales atrasados y capacitamos a su equipo administrativo, eliminando errores recurrentes.',
  },
]

function Casos() {
  // Estado que guarda CUÁL caso está seleccionado actualmente
  // (o null si el modal está cerrado / no hay selección)
  const [casoSeleccionado, setCasoSeleccionado] = useState(null)

  // Estado que controla si el Modal está visible o no
  const [mostrarModal, setMostrarModal] = useState(false)

  // Se ejecuta al hacer click en "Ver detalle" de una tarjeta
  const abrirModal = (caso) => {
    setCasoSeleccionado(caso)
    setMostrarModal(true)
  }

  // Cierra el modal (botón "X", botón "Cerrar" o click fuera del modal)
  const cerrarModal = () => {
    setMostrarModal(false)
  }

  return (
    <section id="casos" className="casos-section">
      <Container>
        <h2 className="titulo-seccion">Casos de Éxito</h2>
        <p className="subtitulo-seccion">
          Empresas reales que confiaron en nosotros y transformaron su
          gestión contable y legal.
        </p>

        <Row className="g-4">
          {casosExito.map((caso) => (
            <Col xs={12} md={6} lg={4} key={caso.id}>
              <Card className="card-caso h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="icono-caso-wrapper">
                    <i className={`bi ${caso.icono}`}></i>
                  </div>
                  <Card.Title className="titulo-caso">{caso.empresa}</Card.Title>
                  <Card.Subtitle className="subtitulo-caso">{caso.rubro}</Card.Subtitle>
                  <Card.Text className="resumen-caso">{caso.resumen}</Card.Text>

                  {/* mt-auto empuja el botón al fondo de la tarjeta,
                      así todas las tarjetas quedan alineadas aunque
                      el texto tenga distinto largo */}
                  <Button
                    variant="outline-primary"
                    className="btn-ver-detalle mt-auto"
                    onClick={() => abrirModal(caso)}
                  >
                    Ver detalle completo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* --- MODAL: solo se renderiza el contenido si hay un caso
          seleccionado, para evitar errores al intentar leer
          propiedades de "null" --- */}
      <Modal show={mostrarModal} onHide={cerrarModal} centered className="modal-caso">
        {casoSeleccionado && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                <i className={`bi ${casoSeleccionado.icono} me-2`}></i>
                {casoSeleccionado.empresa}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="rubro-modal">{casoSeleccionado.rubro}</p>
              <p className="detalle-modal">{casoSeleccionado.detalle}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={cerrarModal}>
                Cerrar
              </Button>
              <Button
                className="btn-principal"
                href="#contacto"
                onClick={cerrarModal}
              >
                Quiero un caso así
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  )
}

export default Casos