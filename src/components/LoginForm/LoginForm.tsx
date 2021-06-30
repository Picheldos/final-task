import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from 'react-router-dom';


import {Container, Input, Button, Error, Mark, LabelMark, InputError, Title} from "./LoginForm.styled";
import {User, cookieLogin, createCookie} from "../../api/form";

interface ILogin {
    login: string;
    password: string;
    rememberPassword: boolean;
}



const LoginForm: React.FC = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<ILogin>()
    const [error, setError] = useState("");
    const [disable, setDisable] = React.useState(false);
    const history = useHistory()

    if (cookieLogin) history.push('/profile');

    const onSubmit: SubmitHandler<ILogin> = async (user) => {

        const loginSuccess = () => {

            history.push('/profile');
        }
        const LoginIsWrong = () => {
            setError('Пользователя ' + userData.login + ' не существует');
            setDisable(false);
        }
        const PasswordIsWrong = () => {
            setError('Пароль введен неверно');
            setDisable(false);
        }
        const userData = {
            ...user,
        };



        if (userData.login === User.login && userData.password === User.password) {
            setDisable(true);
            createCookie(userData.login, userData.password);
            setTimeout(
                loginSuccess, 1000
            );

        } else if (userData.login !== User.login) {
            setDisable(true);
            setTimeout(
                LoginIsWrong, 1000
            );
        } else {
            setDisable(true);
            setTimeout(
                PasswordIsWrong, 1000
            );
        }
        console.log(userData);
    }

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <Title>ONLY.</Title>
            {(error !== "") ? ( <Error>{error}</Error> ) : ""}
            <label>Логин</label>
            <Input placeholder={'Логин'} inputError={!!errors.login?.message} {...register('login', {
                required: 'Обязательное поле'
            })}/>
            {errors.login?.message && <InputError>{errors.login.message}</InputError>}
            <label>Пароль</label>
            <Input placeholder={'Пароль'} type={'password'} inputError={!!errors.password?.message} {...register('password', {
                required: 'Обязательное поле'
            })}/>
            {errors.password?.message && <InputError>{errors.password.message}</InputError>}
            <Mark>
                <Input type={'checkbox'} {...register('rememberPassword')}/>
                <LabelMark>Запомнить пароль</LabelMark>
            </Mark>

            <Button disabled={disable}>Войти</Button>
        </Container>
    );
};

export default LoginForm