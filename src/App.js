import React, { Component } from 'react';

// Containers
import PageOne from './containers/PageOne/loadable';

// Styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello world.</p>
        </header>
      </div>
    );
  }
}

export default App;
