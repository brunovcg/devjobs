import React from 'react';
import { FormStyled, Page, Text } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';

import { useHistory, Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';

const UserLogin = () => {
  const schema = yup.object().shape({
    email: yup
          .string()
          .email('Email inválido')
          .required('Campo obrigatório'),
    password: yup
          .string()
          .min(6)
          .required('Campo obrigatório')
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
  <>
  <Header />  
  <Page>
  <FormStyled>    
    <h1>Login</h1>
    <Input 
      placeholder='Insira seu email' 
      register={register}
      name='email' 
      error={errors.email?.message}
      setHeight='70px'
      setWidth='100%'
    />
    
    <Input 
      placeholder='Insira sua senha' 
      type='password' 
      register={register}
      name='password'
      error={errors.password?.message}
      setHeight='70px'
      setWidth='100%' 
    />

    <Button 
      setClick={handleSubmit(onSubmitFunction)}
      setSize='large'
      setColor='blue'
    >
        Enviar
    </Button>           
  </FormStyled>

  <Text>Caso não tenha uma conta, <Link to='/register'>cadastre-se aqui.</Link></Text>
  </Page>  
  </>  
  );
}

export default UserLogin;
