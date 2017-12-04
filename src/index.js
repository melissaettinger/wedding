import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';

// import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo900, white} from 'material-ui/styles/colors'

const myTheme = getMuiTheme({
  palette: {
    textColor: white,
    primary1Color: indigo900
  },
})


ReactDOM.render(
  <MuiThemeProvider muiTheme={myTheme}>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root')
);

//registerServiceWorker();


