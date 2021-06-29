import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import Index from "../../pages/Index";
import Profile from "../../pages/Profile";

import { GlobalStyles } from "../../styles/globalStyles";
import theme from '../../styles/theme'
import Login from "../../pages/Login";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path={'/login'}>
                        <Login />
                    </Route>
                    <Route path={'/profile'}>
                        <Profile />
                    </Route>
                    <Route exact={true} path={'/'}>
                        <Index />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>


    );
}

export default App;
