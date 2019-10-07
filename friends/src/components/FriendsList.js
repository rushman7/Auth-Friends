import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth';

const FriendsList = props => {
  const [friends, setFriends] = useState({ friendList: [] })

  const getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => setFriends({ friendList: res.data }))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <button onClick={getData}>Retrieve your Friends!</button>
      <div className="friend-list-cont">
        {friends.friendList.map(friend => 
          <div className="friend-cont" key={friend.id}>
            <p>Friend: {friend.name}</p>
            <p>Friend: {friend.age}</p>
            <p>Friend: {friend.email}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FriendsList;