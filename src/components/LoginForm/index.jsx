import React from 'react';
import { Form } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Button';
import api from '../../services/api';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {

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
        .post('/sessions', data)
        .then((response) => {
            const { token, user } = response.data;

            localStorage.setItem('@Kenziehub:token', JSON.stringify(token));
            localStorage.setItem('@Kenziehub:user', JSON.stringify(user));

            return history.push('/dashboard')
        })
        .catch(err => {
            toast.error('Email ou senha inválidos.'); 
            console.log(err);
        })

    }

    return (    
    <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input placeholder='Insira seu email' {...register('email')} />{errors.email?.message}
        <Input placeholder='Insira sua senha' type='password' {...register('password')} />{errors.password?.message}

        <Button type='submit'>Enviar</Button>           
    </Form>
    );
}

export default LoginForm;