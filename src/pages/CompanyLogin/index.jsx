import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormStyled, Page, Text } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';

const CompanyLogin = () => {
  const schema = yup.object().shape({
    companyName: yup
        .string()
        .required('Required field'),
    email: yup
        .string()
        .email('Invalid e-mail')
        .required('Required field'),
    password: yup
        .string()
        .min(6, 'Minimum 6 digits')
        .required('Required field')
  })

  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
  });

  const onSubmitFunction = ({ data }) => {

    api
      .post('/companies', data)
      .then((response)=> {
        const newCompany = response.data;
        localStorage.setItem('@DevJobs:Company', JSON.stringify(newCompany));

        return history.push('/search')
    })
    .catch((err) => {
        toast.error('An error has occurred, try again using a different e-mail.'); 
        console.log(err)
    });
  }


  return (
  <>
  <Header />  
  <Page>
  <FormStyled>    
    <h1>Company Login</h1>
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

    <Button 
      setClick={handleSubmit(onSubmitFunction)}
      setSize='large'
      setColor='var(--blue)'
    >
      Sign In
    </Button>           
  </FormStyled>

  <Text>If you don't have an account already, <Link to='/company-register'>sign up here.</Link></Text>
  </Page>
  </>    
  );
}

export default CompanyLogin;