// Contacto.jsx
// ------------------------------------------------------
// FORMULARIO DE CONTACTO CON VALIDACIÓN (requisito
// obligatorio del PDF "B"). Validamos cada campo con
// expresiones regulares y reglas simples, mostrando mensajes
// de error específicos usando los componentes Form.Control
// e isInvalid de react-bootstrap (que agregan automáticamente
// el borde rojo y el ícono de error).
// ------------------------------------------------------

import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import './Contacto.css'

function Contacto() {
  // Guardamos todos los campos del formulario en UN SOLO objeto
  // de estado (en vez de un useState por campo), para simplificar
  // el manejo cuando hay varios inputs.
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
  })

  // Guarda los mensajes de error de cada campo (vacío = sin error)
  const [errores, setErrores] = useState({})

  // Controla si ya se mostró el mensaje de éxito tras enviar
  const [enviado, setEnviado] = useState(false)

  // Se ejecuta cada vez que el usuario escribe en cualquier input.
  // "name" viene del atributo name="" de cada Form.Control,
  // así reutilizamos UNA sola función para todos los campos.
  const manejarCambio = (e) => {
    const { name, value } = e.target
    setDatos((anterior) => ({ ...anterior, [name]: value }))
  }

  // Valida todos los campos y devuelve un objeto con los errores
  // encontrados (si un campo no tiene error, no aparece en el objeto).
  const validarFormulario = () => {
    const erroresEncontrados = {}

    // Nombre: obligatorio, mínimo 3 caracteres
    if (datos.nombre.trim().length < 3) {
      erroresEncontrados.nombre = 'Ingresa tu nombre completo (mínimo 3 caracteres).'
    }

    // Email: validamos con una expresión regular simple
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regexEmail.test(datos.email)) {
      erroresEncontrados.email = 'Ingresa un correo electrónico válido.'
    }

    // Teléfono: solo números, espacios, "+" y "-", mínimo 8 caracteres
    const regexTelefono = /^[0-9+\-\s]{8,15}$/
    if (!regexTelefono.test(datos.telefono)) {
      erroresEncontrados.telefono = 'Ingresa un teléfono válido (ej: +56 9 1234 5678).'
    }

    // Empresa: obligatorio
    if (datos.empresa.trim().length < 2) {
      erroresEncontrados.empresa = 'Indica el nombre de tu empresa o emprendimiento.'
    }

    // Mensaje: obligatorio, mínimo 10 caracteres
    if (datos.mensaje.trim().length < 10) {
      erroresEncontrados.mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres).'
    }

    return erroresEncontrados
  }

  // Se ejecuta al enviar el formulario
  const manejarEnvio = (e) => {
    e.preventDefault() // Evita que la página se recargue (comportamiento por defecto del HTML)

    const erroresEncontrados = validarFormulario()
    setErrores(erroresEncontrados)

    // Object.keys(...).length === 0 significa que NO hay errores
    if (Object.keys(erroresEncontrados).length === 0) {
      // Aquí, en un proyecto real, se enviarían los datos a un
      // backend o servicio de email (ej: EmailJS, Formspree, etc.)
      console.log('Formulario enviado correctamente:', datos)

      setEnviado(true)

      // Limpiamos el formulario después de enviar
      setDatos({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' })

      // Ocultamos el mensaje de éxito automáticamente después de 5 segundos
      setTimeout(() => setEnviado(false), 5000)
    }
  }

  return (
    <section id="contacto" className="contacto-section">
      <Container>
        <h2 className="titulo-seccion">Conversemos sobre tu empresa</h2>
        <p className="subtitulo-seccion">
          Completa el formulario y un asesor se pondrá en contacto contigo
          dentro de las próximas 24 horas.
        </p>

        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            {/* Mensaje de éxito: solo se muestra si enviado === true */}
            {enviado && (
              <Alert variant="success" className="alerta-exito">
                <i className="bi bi-check-circle-fill me-2"></i>
                ¡Tu mensaje fue enviado con éxito! Te contactaremos pronto.
              </Alert>
            )}

            <Form onSubmit={manejarEnvio} noValidate className="form-contacto">
              <Row>
                <Col xs={12} md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      placeholder="Ej: Juan Pérez"
                      value={datos.nombre}
                      onChange={manejarCambio}
                      isInvalid={!!errores.nombre} // !!  convierte el texto/undefined en booleano
                    />
                    <Form.Control.Feedback type="invalid">
                      {errores.nombre}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Ej: juan@empresa.com"
                      value={datos.email}
                      onChange={manejarCambio}
                      isInvalid={!!errores.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errores.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="tel"
                      name="telefono"
                      placeholder="Ej: +56 9 1234 5678"
                      value={datos.telefono}
                      onChange={manejarCambio}
                      isInvalid={!!errores.telefono}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errores.telefono}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Empresa / Emprendimiento</Form.Label>
                    <Form.Control
                      type="text"
                      name="empresa"
                      placeholder="Ej: Comercial Andina Ltda."
                      value={datos.empresa}
                      onChange={manejarCambio}
                      isInvalid={!!errores.empresa}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errores.empresa}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>¿En qué podemos ayudarte?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="mensaje"
                  placeholder="Cuéntanos brevemente qué necesitas..."
                  value={datos.mensaje}
                  onChange={manejarCambio}
                  isInvalid={!!errores.mensaje}
                />
                <Form.Control.Feedback type="invalid">
                  {errores.mensaje}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="text-center">
                <Button type="submit" className="btn-principal btn-lg">
                  Enviar Mensaje
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contacto