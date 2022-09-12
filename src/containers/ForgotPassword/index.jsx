import React, { useRef, useContext } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import AuthContext from '../../context/AuthContext'

function ForgotPassword() {
    const form = useRef(null)
    const { forgotPassword, message, error, loading } = useContext(AuthContext)
  
    const handleOnClick = () => {
      const formData = new FormData(form.current)
      forgotPassword(formData)
    }
    return (
      <Container>
        <Row style={{height:'100vh'}} className="d-flex justify-content-center align-items-center">
          <Col md="8">
            <h2>Olvidaste tu contraseña</h2>
            <Form ref={form}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Ingresa tu email" />
              </Form.Group>
              <Button type="button" onClick={handleOnClick}>Enviar</Button>
                {loading  &&
                  <Form.Text className="text-muted">
                    Cargando...
                  </Form.Text>
                }
                {error && 
                  <Form.Text className="text-muted">
                    Error en los datos ingresados
                  </Form.Text>
                }
                {message && 
                  <Form.Text className="text-muted">
                    {message}
                  </Form.Text>
                }
            </Form>
          </Col>
        </Row>
      </Container>
    )
}

export default ForgotPassword