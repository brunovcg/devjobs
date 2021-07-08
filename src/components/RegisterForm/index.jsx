import React from 'react';
import { Form } from './styles';
import Button from '../../components/Button';
import api from '../../services/api';
import Input from '../../components/Input';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = ({}) => {
    const PasswordStrength = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/);

    const schema = yup.object().shape({
        name: yup
                .string()
                .required('Campo obrigatório'),
        email: yup
                .string()
                .email('Email inválido')
                .required('Campo obrigatório'),
        birthdate: yup
            .date()
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

    const onSubmitFunction = ({ birthdate, password, name, email }) => {
        const user = { birthdate, password, name, email} ;

        api
        .post('/users', user)
        .then((response)=> {
            toast.success('Conta criada com sucesso.'); 
                       
            const { accessToken } = response.data;
            localStorage.setItem('@DevJobs:token', JSON.stringify(accessToken));

            return history.push('/dashboard')
        })
        .catch((err) => {
            toast.error('Ocorreu um erro, tente novamente com outro email.'); 
            console.log(err)
        });
    }
    return (
    <Form onSubmit={handleSubmit(onSubmitFunction)}>

        <Input placeholder='Name' {...register('name')} />
        {errors.name?.message}
        <Input placeholder='E-mail' {...register('email')} />
        {errors.email?.message}
        <Input placeholder='BirthDate' type='date' {...register('birthdate')} />
        {errors.birthdate?.message}
        <Input placeholder='Password' type='password' {...register('password')} />
        {errors.password?.message}
        <Input placeholder='ConfirmPassword' type='password' {...register('confirmPassword')} />
        {errors.passwordConfirm?.message}

        <Button type='submit'>Enviar</Button>

    </Form>
    );
}

export default RegisterForm;