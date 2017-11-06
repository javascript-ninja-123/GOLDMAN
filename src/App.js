import React, { Component } from 'react';
import './App.css';

//import components
import NAVIGATION from './components/Navigation';
import DYNAMICHEADER from './components/DynamicHeader';
import QUESTION from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DYNAMICHEADER/>
        <NAVIGATION/>
        <QUESTION/>
      </div>
    );
  }
}

export default App;
