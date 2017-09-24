import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Tom and Melissa</h1>
          <Button onClick={() => alert('December 8, 2018')}>Click here</Button>
        </div>
        <h1 className="App-intro">
          We are getting married!
        </h1>
      </div>
    );
  }
}

export default App;
