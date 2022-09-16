import React, { useRef, useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import AuthContext from '../../context/AuthContext';

function SignUp() {
  const form = useRef(null);
  const { signUp, error, message, loading } = useContext(AuthContext);
  const handleOnClick = () => {
    const formData = new FormData(form.current);
    signUp(formData);
  };
  return (
    <Container>
      <Row style={{height:'100vh'}} className="d-flex justify-content-center align-items-center">
        <Col md="8">
          <h2>Formulario de Registro</h2>
          <Form ref={form}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="username" type="text" placeholder='Nombre'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder='Email'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder='Password'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password 1</Form.Label>
              <Form.Control name="password1" type="password" placeholder='Repite Password'/>
            </Form.Group>
            <Button type="button" onClick={handleOnClick}>Registrate</Button>
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
  );
}

export default SignUp;
