import React from "react";
import { useHistory } from 'react-router-dom';

import {userLogin} from "../LoginForm/LoginForm";

import { Container, Hello, HelloName, Logout } from "./Profile.styled";


const Profile: React.FC  = () => {
    const history = useHistory()
    const isLogin = () => {
        userLogin === '' ? history.push('/') : console.log('');
    }
    isLogin()
    return (
        <Container>
            <HelloName>
                <Hello>Здравствуйте,</Hello>
                <h1>{userLogin}</h1>
            </HelloName>
            <Logout onClick={() => {history.push('/')}}>Выйти</Logout>

        </Container>
    );

};

export default Profile

