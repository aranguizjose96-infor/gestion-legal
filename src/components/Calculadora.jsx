// Calculadora.jsx
// ------------------------------------------------------
// CALCULADORA INTERACTIVA: requisito específico del tema 17
// (GestionLegal). Permite al usuario estimar el valor mensual
// de la asesoría contable según:
//   - Tipo de empresa (Persona Natural, EIRL, SPA, Ltda.)
//   - Cantidad de trabajadores
//   - Servicios adicionales (checkboxes)
//
// Usamos useState para guardar cada valor del formulario y
// useEffect para RECALCULAR el total automáticamente cada vez
// que el usuario cambia algún dato (sin necesidad de un botón
// "Calcular" aparte, lo que se siente más moderno e interactivo).
// ------------------------------------------------------

import { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Card } from 'react-bootstrap'
import './Calculadora.css'

// Valores base de referencia (en pesos chilenos) usados para el cálculo.
// Los dejamos como constantes fuera del componente porque NO cambian
// durante la ejecución, así no se vuelven a crear en cada render.
const PRECIO_BASE = {
  'Persona Natural': 35000,
  'EIRL': 55000,
  'SPA': 75000,
  'Ltda.': 90000,
}

const PRECIO_POR_TRABAJADOR = 2500 // costo adicional por cada trabajador (remuneraciones)

const SERVICIOS_ADICIONALES = [
  { id: 'tributaria', nombre: 'Asesoría Tributaria Avanzada', costo: 20000 },
  { id: 'auditoria', nombre: 'Auditoría y Control Interno', costo: 35000 },
  { id: 'legal', nombre: 'Trámites Legales y Notariales', costo: 15000 },
]

function Calculadora() {
  // --- Estados del formulario ---
  const [tipoEmpresa, setTipoEmpresa] = useState('Persona Natural')
  const [trabajadores, setTrabajadores] = useState(0)
  const [serviciosElegidos, setServiciosElegidos] = useState([]) // arreglo de ids seleccionados

  // --- Estado del resultado final ---
  const [total, setTotal] = useState(0)

  // useEffect se ejecuta cada vez que cambia alguna de las
  // variables listadas en el arreglo de dependencias [tipoEmpresa,
  // trabajadores, serviciosElegidos]. Así el total se recalcula
  // EN TIEMPO REAL, sin que el usuario tenga que apretar un botón.
  useEffect(() => {
    // 1. Partimos del precio base según el tipo de empresa elegido
    let calculo = PRECIO_BASE[tipoEmpresa]

    // 2. Sumamos el costo por cada trabajador (Number() asegura que
    //    sea un número y no un texto, ya que el input HTML entrega string)
    calculo += Number(trabajadores) * PRECIO_POR_TRABAJADOR

    // 3. Sumamos el costo de cada servicio adicional marcado.
    //    Recorremos SERVICIOS_ADICIONALES y filtramos solo los que
    //    están dentro del arreglo serviciosElegidos.
    SERVICIOS_ADICIONALES.forEach((servicio) => {
      if (serviciosElegidos.includes(servicio.id)) {
        calculo += servicio.costo
      }
    })

    setTotal(calculo)
  }, [tipoEmpresa, trabajadores, serviciosElegidos])

  // Maneja el click/cambio de un checkbox de servicio adicional.
  // Si el servicio ya estaba seleccionado, lo QUITA del arreglo;
  // si no estaba, lo AGREGA.
  const manejarCheckbox = (id) => {
    setServiciosElegidos((anterior) =>
      anterior.includes(id)
        ? anterior.filter((item) => item !== id) // lo remueve
        : [...anterior, id]                       // lo agrega
    )
  }

  // Formatea el número como moneda chilena (ej: 1234567 -> "$1.234.567")
  const formatearPrecio = (numero) =>
    numero.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  return (
    <section id="calculadora" className="calculadora-section">
      <Container>
        <h2 className="titulo-seccion">Calculadora de Honorarios</h2>
        <p className="subtitulo-seccion">
          Estima en segundos el valor mensual de tu asesoría contable, según
          las características de tu empresa.
        </p>

        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <Card className="card-calculadora">
              <Card.Body>
                <Row>
                  {/* --- Tipo de empresa --- */}
                  <Col xs={12} md={6} className="mb-4">
                    <Form.Group>
                      <Form.Label className="label-form">
                        <i className="bi bi-building me-2"></i>
                        Tipo de Empresa
                      </Form.Label>
                      <Form.Select
                        value={tipoEmpresa}
                        onChange={(e) => setTipoEmpresa(e.target.value)}
                      >
                        {Object.keys(PRECIO_BASE).map((tipo) => (
                          <option key={tipo} value={tipo}>
                            {tipo}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  {/* --- Cantidad de trabajadores --- */}
                  <Col xs={12} md={6} className="mb-4">
                    <Form.Group>
                      <Form.Label className="label-form">
                        <i className="bi bi-people me-2"></i>
                        N° de Trabajadores
                      </Form.Label>
                      <Form.Control
                        type="number"
                        min="0"
                        max="200"
                        value={trabajadores}
                        onChange={(e) => setTrabajadores(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* --- Servicios adicionales (checkboxes) --- */}
                <Form.Group className="mb-4">
                  <Form.Label className="label-form">
                    <i className="bi bi-plus-circle me-2"></i>
                    Servicios Adicionales
                  </Form.Label>

                  {SERVICIOS_ADICIONALES.map((servicio) => (
                    <Form.Check
                      key={servicio.id}
                      type="checkbox"
                      id={`check-${servicio.id}`}
                      className="checkbox-servicio"
                      label={`${servicio.nombre} (+${formatearPrecio(servicio.costo)})`}
                      checked={serviciosElegidos.includes(servicio.id)}
                      onChange={() => manejarCheckbox(servicio.id)}
                    />
                  ))}
                </Form.Group>

                {/* --- Resultado final --- */}
                <div className="resultado-calculadora">
                  <span>Valor mensual estimado</span>
                  {/* La key={total} fuerza a React a "re-montar" este
                      elemento cada vez que cambia el total, lo que
                      reinicia la animación de aparición (pulso) */}
                  <h3 key={total} className="monto-total">
                    {formatearPrecio(total)}
                  </h3>
                  <small>* Valor referencial, sujeto a evaluación final.</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Calculadora