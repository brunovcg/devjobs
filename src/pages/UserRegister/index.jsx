import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormStyled, Container } from './styles';
import Button from '../../components/Button';
import api from '../../services/api';
import Input from '../../components/Input';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const PasswordStrength = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/);
  const NameValidation = (/^[a-z][a-z\s]*$/i);
  const PhoneValidation = (/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}/)

  const schema = yup.object().shape({
    firstName: yup
        .string()
        .required('Campo obrigatório')
        .matches(NameValidation),
    lastName: yup
        .string()
        .required('Campo obrigatório')
        .matches(NameValidation),
    email: yup
        .string()
        .email('Email inválido')
        .required('Campo obrigatório'),
    birthDate: yup
        .date()
        .required('Campo obrigatório'),
    password: yup
        .string()
        .min(6, 'Mínimo de 6 digitos')
        .required('Campo obrigatório')
        .matches(PasswordStrength, 'Sua senha é fraca, use letras minúsculas, maiúsculas, números e símbolos.'),
    linkedinProfile: yup
        .string(),
    address: yup
        .string(),
    phone: yup
        .string()
        .required("Endereço obrigatório")
        .matches(PhoneValidation, '(xx)xxxxx-xxxx'),
    confirmPassword: yup
        .string()
        .required('Campo obrigatório')
        .oneOf([yup.ref('password')], 'Senhas diferentes')
  })

  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
  });

  const onSubmitFunction = ({ data }) => {
      api
      .post('/register', data)
      .then((response)=> {
          toast.success('Conta criada com sucesso.'); 
                     
          const { accessToken } = response.data;
          localStorage.setItem('@DevJobs:Token:User', JSON.stringify(accessToken));

          return history.push('/dashboard')
      })
      .catch((err) => {
          toast.error('Ocorreu um erro, tente novamente com outro email.'); 
          console.log(err)
      });
  }
  return (
  <>
  <Container>
    <h2>Register</h2>

    <FormStyled>

      <Input placeholder='First Name*' {...register('firstName')} />
      {errors.firstName?.message}

      <Input placeholder='Last Name*' {...register('lastName')} />
      {errors.lastName?.message}

      <Input placeholder='E-mail*' {...register('email')} />
      {errors.email?.message}

      <Input placeholder='Address' {...register('address')} />
      {errors.address?.message}

      <Input placeholder='Birth Date*' type='date' {...register('birthDate')} />
      {errors.birthDate?.message}

      <Input placeholder='Linkedin Profile' {...register('linkedinProfile')} />
      {errors.linkedinProfile?.message}        

      <Input placeholder='Phone' {...register('phone')} />
      {errors.phone?.message}

      <Input placeholder='Password*' type='password' {...register('password')} />
      {errors.password?.message}

      <Input placeholder='ConfirmPassword*' type='password' {...register('confirmPassword')} />
      {errors.passwordConfirm?.message}

      <Button setClick={handleSubmit(onSubmitFunction)}>Enviar</Button>

    </FormStyled>

      
  </Container>

  <p>Caso já tenha uma conta, <Link to='/login'>entre aqui.</Link></p>
  </>
  );
}

export default Register;
