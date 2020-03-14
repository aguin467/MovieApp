import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './Nav';
import Films from './Films';
import Id from './Ids';
import Links from './Links';


function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/films' exact component={Films} />
          <Route path='/ids'  exact component={Id} />
          <Route path='/links'  exact component={Links} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
