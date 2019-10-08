import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { getFriends } from './actions';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import Home from './components/Home';
import EditFriend from './components/EditFriend';

class App extends Component {
  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
    <div className="App">
      <h2>Auth Friends</h2>
      {this.props.error ? <h3>Error Fetching Friends</h3> : null}
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
}

const mapStateToProps = state => ({
  friends: state.friends,
  error: state.error,
})

export default connect(mapStateToProps, { getFriends })(App);
