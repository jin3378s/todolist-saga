import React, { Component } from 'react';
import { Header, CardBoard } from './components/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardBoard />
      </div>
    );
  }
}

export default App;
