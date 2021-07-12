import React from 'react';
import {Container, FormStyled} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';


import { useHistory, Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const userLogin = () => {
  const schema = yup.object().shape({
    email: yup
          .string()
          .email('Email inválido')
          .required('Campo obrigatório'),
    password: yup
          .string()
          .min(6)
          .required('Campo obrigatório'),
  })

  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
  });

  const onSubmitFunction = (data) => {
      api
      .post('/login', data)
      .then((response) => {
          const { accessToken } = response.data;

          localStorage.setItem('@DevJobs:Token:User', JSON.stringify(accessToken));

          return history.push('/dashboard')
      })
      .catch(err => {
          toast.error('Email ou senha inválidos.'); 
          console.log(err);
      })
  }


  return (
  <Container>
      <h1>Login</h1>

      <FormStyled>
        <Input placeholder='Insira seu email' {...register('email')} />{errors.email?.message}
        <Input placeholder='Insira sua senha' type='password' {...register('password')} />{errors.password?.message}

        <Button onClick={handleSubmit(onSubmitFunction)}>Enviar</Button>           
      </FormStyled>

      <p>Caso não tenha uma conta, <Link to='/signup'>cadastre-se aqui.</Link></p>  
  </Container>
  );
}

export default userLogin;
