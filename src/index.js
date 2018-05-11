import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
//import purple from 'material-ui/colors/red';
import registerServiceWorker from './registerServiceWorker';

import { create } from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

const theme = createMuiTheme({
    palette: {
        primary: { main: '#11cb5f'}//purple[500] }, // Purple and green play nicely together.
        //secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
    direction: 'rtl'
})

ReactDOM.render(
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </JssProvider>,
    document.getElementById('root'),
);
registerServiceWorker();
