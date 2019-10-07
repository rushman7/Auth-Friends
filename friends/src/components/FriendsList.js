import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth';
import AddFriend from './AddFriend';
import { Link } from 'react-router-dom';

const FriendsList = () => {
  const [friends, setFriends] = useState([])
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))
  }, [display])

  const onAddFriend = (e, data) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setDisplay(!display)
  };

  const onChangeDisplay = () => {
    setDisplay(!display)
  }

  return (
    <div>
      { 
        display 
        ? <AddFriend display={display} onAddFriend={onAddFriend} />
        : <button onClick={() => onChangeDisplay()}>Add a friend!</button>
      }
      <div className="friend-list-cont">
        {friends.map(friend => 
          <div className="friend-cont" key={friend.id}>
            <p>Friend: {friend.name}</p>
            <p>Friend: {friend.age}</p>
            <p>Friend: {friend.email}</p>
            <Link to={`/friends/${friend.id}`}><button>Edit</button></Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default FriendsList;