import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import Home from './components/Home';
import EditFriend from './components/EditFriend';

function App() {
  return (
    <div className="App">
      <h2>Auth Friends</h2>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <PrivateRoute exact path="/friends" component={AddFriend} />
        <PrivateRoute exact path="/friends/:id" component={EditFriend} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
