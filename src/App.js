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
        <div className="App-contents">
          <Switch>
            <Route path="/page-one" component={PageOne} />
            <Route path="/page-two" component={PageTwo} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
