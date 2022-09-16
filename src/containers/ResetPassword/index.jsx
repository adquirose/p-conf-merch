import React, { useRef, useContext, useState } from 'react'
import { Container, Form, Row, Col, Button} from 'react-bootstrap'
import { useLocation }  from 'react-router-dom'
import AuthContext from '../../context/AuthContext';

function ResetPassword() {
  const [isDisabled, setIsDisabled] = useState(true)
  const location = useLocation()
  const { loading, error, message, resetPassword } = useContext(AuthContext)
  const form = useRef(null)
  
  const handleOnclick = () => {
    const formData = new FormData(form.current)
    const params = new URLSearchParams(location.search);
    resetPassword(params, formData)
  }
  const handleOnChange = () => {  
    const formData = new FormData(form.current)
    const disabled = (formData.get('password') !== formData.get('password1')) || formData.get('password') === ''
    setIsDisabled(disabled)
  }

  return (
    <Container>
      <Row style={{height:'100vh'}} className="d-flex justify-content-center align-items-center">
        <Col md="8">
          <h2>Escribe tu nueva contraseña</h2>
          <Form ref={form}>
            <Form.Group>
              <Form.Label>
                Password
              </Form.Label>
              <Form.Control name="password" type="password" onChange={handleOnChange} placeholder="Escribe tu pasword"/>
              <Form.Control name="password1" type="password" onChange={handleOnChange} placeholder="Repite tu pasword"/>
              <Button disabled={isDisabled} type="button" onClick={handleOnclick}>Cambiar</Button>
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
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ResetPassword