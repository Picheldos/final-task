import React from "react";
import { useHistory } from 'react-router-dom';

import {Container, Hello, HelloName, Logout, Title} from "./Welcome.styled";
import {cookieLogin, removeCookie} from "../../api/form";

const Welcome: React.FC  = () => {
    const history = useHistory()

    if (!cookieLogin) history.push('/login');


    return (
        <Container>
            <Title>ONLY.</Title>
            <HelloName>
                <Hello>Здравствуйте,</Hello>
                <h1>{cookieLogin}</h1>
            </HelloName>
            <Logout onClick={() => removeCookie()}>Выйти</Logout>

        </Container>
    );

};

export default Welcome

