import React, {useEffect, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {User} from "../../api/form";

interface ILogin {
    login: string;
    password: string;
    rememberPassword: boolean;
}


const LoginForm: React.FC = () => {
    const { handleSubmit, register } = useForm<ILogin>()
    const [error, setError] = useState("");

    const onSubmit: SubmitHandler<ILogin> = async (user) => {

        const loginSucces = () => {console.log('login is success')}
        const loginDenied = () => {setError('Wrong login or password')}
        const userData = {
            ...user,
        };
        console.log(userData)
        if (userData.login === User.login && userData.password === User.password) {
            setTimeout(
                loginSucces, 1000
            );

        } else {
            setTimeout(
                loginDenied, 1000

            )
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {(error !== "") ? ( <div>{error}</div> ) : ""}
            <label>Логин</label>
            <input placeholder={'Логин'} {...register('login', {
                required: 'Обязательное поле'
            })}/>
            <label>Пароль</label>
            <input placeholder={'Пароль'} type={'password'} {...register('password', {
                required: 'Обязательное поле'
            })}/>
            <input type={'checkbox'} {...register('rememberPassword')}/>
            <label>Запомнить меня</label>
            <button>Войти</button>
        </form>
    );
};

export default LoginForm