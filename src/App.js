import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Containers
import PageOne from './containers/PageOne/loadable';
import PageTwo from './containers/PageTwo/loadable';

// Styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/page-one" component={PageOne} />
            <Route path="/page-two" component={PageTwo} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
