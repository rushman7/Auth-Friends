import React,{ useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth';

const EditFriend = props => {
  const [editFriend, setEditFriend] = useState({
    name: '',
    age: 0,
    email: '',
  })

  useEffect(() => {
    const id = props.match.params.id
    axiosWithAuth()
      .get(`/friends/${id}`)
      .then(res => setEditFriend(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setEditFriend({
      ...editFriend,
      [e.target.name]: e.target.value
    });
  };

  const onEditFriend = data => {
    const id = props.match.params.id
    axiosWithAuth()
      .put(`/friends/${id}`, data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    props.history.push('/friends')
  }

  return (
    <div>
      <form onSubmit={() => onEditFriend(editFriend)} className="login-form">
        <input 
          type="text"
          name="name"
          value={editFriend.name}
          onChange={handleChange}
          placeholder="name..."
        />
        <input 
          type="age"
          name="age"
          value={editFriend.age}
          onChange={handleChange}
          placeholder="age..."
        />
        <input 
          type="email"
          name="email"
          value={editFriend.email}
          onChange={handleChange}
          placeholder="email..."
        />
        <button>Edit Friend</button>
      </form>
    </div>
  )
}

export default EditFriend;