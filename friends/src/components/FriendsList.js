import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth';
import { connect } from 'react-redux'
import AddFriend from './AddFriend';
import { Link } from 'react-router-dom';
import { getFriend, deleteFriend } from '../actions';

const FriendsList = props => {
  const [display, setDisplay] = useState(false);

  const onChangeDisplay = () => {
    setDisplay(!display)
  }

  const onDelete = (e, friend) => {
    e.preventDefault();
    props.deleteFriend(friend)
  }

  const check = () => {
    console.log(props)
  }

  return (
    <div>
      <button onClick={check}>Check?</button>
      { 
        display 
        ? <AddFriend display={display}/>
        : <button onClick={() => onChangeDisplay()}>Add a friend!</button>
      }
      <div className="friend-list-cont">
        {
          props.isFetching 
          ?  <p>Loading friends...</p>
          :  props.friends.map(friend => 
              <div className="friend-cont" key={friend.id}>
                <p>Friend: {friend.name}</p>
                <p>Friend: {friend.age}</p>
                <p>Friend: {friend.email}</p>
                <Link 
                  to={`/friends/${friend.id}`} 
                  onClick={() => props.getFriend(friend)}>
                  <button>Edit</button>
                </Link>
                <button onClick={(e) => onDelete(e, friend)}>Delete</button>
              </div>
            )   
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    isFetching: friendsReducer.isFetching
  }
}

export default connect(mapStateToProps, { getFriend, deleteFriend })(FriendsList);