import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth';

const FriendsList = props => {
  const [friends, setFriends] = useState({
    friendList: [
      {
        name: 'Edward',
        age: 25,
        email: 'edward@gmail.com',
        id: 0
      },
      {
        name: 'Kenneth',
        age: 23,
        email: 'kenneth@gmail.com',
        id: 1
      }
    ]
  })
  return (
    <div className="friend-list-cont">
      {friends.friendList.map(friend => 
        <div className="friend-cont">
          <p>Friend: {friend.name}</p>
          <p>Friend: {friend.age}</p>
          <p>Friend: {friend.email}</p>
        </div>
      )}
    </div>
  )
}

export default FriendsList;