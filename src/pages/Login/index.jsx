import React from 'react';
import {Container} from './styles';
import {LoginForm} from '../../components/LoginForm';

import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <Container>
        <h1>Login</h1>
        <LoginForm />
        <p>Caso não tenha uma conta, <Link to='/signup'>cadastre-se aqui.</Link></p>  
    </Container>
  );
}

export default Login;
