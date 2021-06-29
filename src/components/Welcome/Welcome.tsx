import React from "react";
import { useHistory } from 'react-router-dom';

import {Container, Hello, HelloName, Logout, Title} from "./Welcome.styled";
import {cookieLogin, removeCookie} from "../../api/form";
import {userLogin} from "../LoginForm/LoginForm";

const Welcome: React.FC  = () => {
    const history = useHistory()

    if (cookieLogin === undefined) history.push('/profile');


    return (
        <Container>
            <Title>ONLY.</Title>
            <HelloName>
                <Hello>Здравствуйте,</Hello>
                <h1>{cookieLogin}</h1>
            </HelloName>
            <Logout onClick={() => history.push('/')}>Выйти</Logout>

        </Container>
    );

};

export default Welcome

