import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tom and Melissa</h2>
          <div>
            <Button onClick={() => alert('test')}>Click here</Button>
          </div>
        </div>
        <p className="App-intro">
          We are getting married!
        </p>
      </div>
    );
  }
}

export default App;
