// Servicios.jsx
// ------------------------------------------------------
// Sección de SERVICIOS usando un ACORDEÓN (requisito
// obligatorio del PDF "B"). Usamos el componente Accordion
// de react-bootstrap, que maneja automáticamente el abrir/
// cerrar de cada panel (no necesitamos programar esa lógica
// a mano, react-bootstrap ya la trae integrada).
// ------------------------------------------------------

import { Container, Row, Col, Accordion } from 'react-bootstrap'
import './Servicios.css'

// Guardamos los servicios en un arreglo de objetos.
// Esto es una BUENA PRÁCTICA: en vez de escribir 6 bloques de
// código repetidos, generamos los paneles del acordeón con un
// .map() recorriendo este arreglo. Si más adelante quieres
// agregar/quitar un servicio, solo editas este arreglo.
const listaServicios = [
  {
    icono: 'bi-calculator',
    titulo: 'Contabilidad General',
    descripcion:
      'Llevamos tu contabilidad completa al día: libros contables, balances, estados financieros y conciliaciones bancarias, cumpliendo con la normativa vigente del SII.',
  },
  {
    icono: 'bi-receipt',
    titulo: 'Asesoría Tributaria',
    descripcion:
      'Planificación y declaración de impuestos (IVA, Renta), optimización tributaria legal y representación ante el Servicio de Impuestos Internos.',
  },
  {
    icono: 'bi-building',
    titulo: 'Constitución de Empresas',
    descripcion:
      'Te acompañamos en todo el proceso de creación de tu empresa: elección de estructura legal, inscripción, obtención de RUT y permisos municipales.',
  },
  {
    icono: 'bi-people',
    titulo: 'Asesoría Laboral y Remuneraciones',
    descripcion:
      'Gestión de contratos, liquidaciones de sueldo, finiquitos y cumplimiento de obligaciones previsionales (AFP, Isapre/Fonasa, mutualidades).',
  },
  {
    icono: 'bi-clipboard-check',
    titulo: 'Auditoría y Control Interno',
    descripcion:
      'Revisiones independientes de procesos financieros y administrativos para detectar riesgos y asegurar la transparencia de tu negocio.',
  },
  {
    icono: 'bi-shield-check',
    titulo: 'Regularización y Trámites Legales',
    descripcion:
      'Regularización de deudas tributarias, trámites ante notarías y conservadores, y representación legal en gestiones administrativas.',
  },
]

function Servicios() {
  return (
    <section id="servicios" className="servicios-section">
      <Container>
        <h2 className="titulo-seccion">Nuestros Servicios</h2>
        <p className="subtitulo-seccion">
          Soluciones contables y legales integrales para que tu empresa
          cumpla con todas sus obligaciones sin complicaciones.
        </p>

        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            {/* defaultActiveKey="0" hace que el primer panel
                aparezca abierto al cargar la página */}
            <Accordion defaultActiveKey="0" className="acordeon-servicios">
              {listaServicios.map((servicio, index) => (
                // El "eventKey" identifica a cada panel de forma única,
                // por eso usamos el índice del arreglo (convertido a texto)
                <Accordion.Item eventKey={String(index)} key={index}>
                  <Accordion.Header>
                    <i className={`bi ${servicio.icono} icono-servicio`}></i>
                    <span>{servicio.titulo}</span>
                  </Accordion.Header>
                  <Accordion.Body>{servicio.descripcion}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Servicios