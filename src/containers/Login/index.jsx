import React, { useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AuthContext from '../../context/AuthContext';

// const providersNames = [
//   'discord',
//   'facebook',
//   'github',
//   'google',
//   'instagram',
//   'linkedin',
//   'reddit',
//   'twitch',
//   'twitter',
//   'vk',
//   'auth0',
// ];

// function LoginButton({ providerName }) {
//   return (
//     <a href={`${backendUrl}/api/connect/${providerName}`}>
//       <button type="button" style={{ width: '150px' }}>
//         Connect to {providerName}
//       </button>
//     </a>
//   );
// }

function Login() {
  const { error, loading, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const form = useRef(null);
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    signIn(formData, navigate);
  };

  return (
    <Container>
      <Row style={{height:'100vh'}} className="d-flex justify-content-center align-items-center">
        <Col md="8">
          <h2>Inicio de sesión</h2>
          <Form ref={form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="user" type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button type="button" onClick={handleSubmit}>Iniciar</Button>
            {loading  &&
              <Form.Text className="text-muted">
                Cargando...
              </Form.Text>
            }
            { error && 
                <Form.Text className="text-muted">
                  Error en los datos ingresados
                </Form.Text>
            }
          </Form>
          <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          <Link to="/signup">Registrate</Link>
        </Col>
      </Row>
    
      {/* <ul style={{ listStyleType: 'none' }}>
        {providersNames.map((providerName) => (
          <li key={providerName}>
            <LoginButton providerName={providerName} />
          </li>
        ))}
      </ul> */}  
    </Container>
  );
}
export default Login;
