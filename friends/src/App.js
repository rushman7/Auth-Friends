import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <h2>Auth Friends</h2>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/friends"><button>Click here to look at your friends!</button></Link>
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
