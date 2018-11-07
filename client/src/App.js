import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import history from './history'
import store from './store';

import AddEntry from './components/AddEntry';
import UserEntries from './components/UserEntries';
import UserEntry from './components/UserEntry';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <div className="container">
              <Switch>                
                <Route exact path="/" component={Login}/>
                <Route exact path="/users/:userId/entries" component={UserEntries}/>
                <Route exact path="/users/:userId/entries/add" component={AddEntry}/>
                <Route exact path="/users/:userId/entries/:entryId" component={UserEntry}/>
                <Route exact path="/register" component={Register}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;