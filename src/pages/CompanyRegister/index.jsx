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

const CompanyRegister = () => {
  const PasswordStrength = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/);

  const schema = yup.object().shape({
    companyName: yup
        .string()
        .email('Email inválido')
        .required('Campo obrigatório'),
    email: yup
        .string()
        .email('Email inválido')
        .required('Campo obrigatório'),
    password: yup
        .string()
        .min(6, 'Mínimo de 6 digitos')
        .required('Campo obrigatório')
        .matches(PasswordStrength, 'Sua senha é fraca, use letras minúsculas, maiúsculas, números e símbolos.'),
    confirmPassword: yup
        .string()
        .required('Campo obrigatório')
        .oneOf([yup.ref('password')], 'Senhas diferentes')
  })

  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
  });

  const onSubmitFunction = ({ companyName, email, password }) => {
    const company = { companyName, email, password };

    api
      .post('/companies', company)
      .then((response) => {
          const { newCompany } = response.data;

          localStorage.setItem('@DevJobs:Company', JSON.stringify(newCompany));

          return history.push('/search')
      })
      .catch(err => {
          toast.error('Email ou senha inválidos.'); 
          console.log(err);
      })
  }


  return (
  <Page>
  <Header />  
  
  <FormStyled>    
    <h1>Company Register</h1>
    <Input 
      placeholder='Company Name' 
      register={register}
      name='companyName' 
      error={errors.companyName?.message}
      setHeight='70px'
      setWidth='100%'
    />

    <Input 
      placeholder='Email' 
      register={register}
      name='email' 
      error={errors.email?.message}
      setHeight='70px'
      setWidth='100%'
    />

    <Input 
      placeholder='Password'
      type='password' 
      register={register}
      name='password' 
      error={errors.password?.message}
      setHeight='70px'
      setWidth='100%'
    />
    
    <Input 
      placeholder='Confirm Password' 
      type='password' 
      register={register}
      name='passwordConfirm'
      error={errors.passwordConfirm?.message}
      setHeight='70px'
      setWidth='100%' 
    />

    <Button 
      setClick={handleSubmit(onSubmitFunction)}
      setSize='large'
      setColor='blue'
    >
      Sign Up
    </Button>           
  </FormStyled>

  <Text>If you already have an account, <Link to='/'>sign in here.</Link></Text>
  </Page>    
  );
}

export default CompanyRegister;