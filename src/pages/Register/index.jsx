import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <Container>
        <h2>Register</h2>
        <RegisterForm />
        <p>Caso já tenha uma conta, <Link to='/login'>entre aqui.</Link></p>
    </Container>
  );
}

export default Register;
