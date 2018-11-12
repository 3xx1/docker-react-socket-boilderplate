import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

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
          <Switch>
            <Route path="/page-one" component={PageOne} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
