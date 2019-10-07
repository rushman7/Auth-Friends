import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import GasPrices from './components/GasPrices';

function App() {
  return (
    <div className="App">
      <h2>Auth Friends</h2>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/protected"><button>Protected Page</button></Link>
      <Switch>
        <Route exact path="/protected" component={GasPrices} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
