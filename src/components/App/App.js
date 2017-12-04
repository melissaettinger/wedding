import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../styles/App.css';
import Home from '../Home/Home'

import AppBarContent from './AppBar';

class App extends Component {
  render() {
    return (
      <div>
        <AppBarContent />
        <Home />
      </div>
    );
  }
}

export default App;
