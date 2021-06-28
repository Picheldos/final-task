import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import Index from "../../pages/Index";
import User from "../../pages/User";

import { GlobalStyles } from "../../styles/globalStyles";
import theme from '../../styles/theme'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path={'/user'}>
                        <User />
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
