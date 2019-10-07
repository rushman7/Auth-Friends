import React,{ useState } from 'react';

const AddFriend = props => {
  const initialState = {
    name: '',
    age: 0,
    email: '',
  }

  const [addFriend, setAddFriend] = useState(initialState)

  const handleChange = e => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={(e) => props.onAddFriend(e, addFriend)} className="login-form">
        <input 
          type="text"
          name="name"
          value={addFriend.name}
          onChange={handleChange}
          placeholder="name..."
        />
        <input 
          type="age"
          name="age"
          value={addFriend.age}
          onChange={handleChange}
          placeholder="age..."
        />
        <input 
          type="email"
          name="email"
          value={addFriend.email}
          onChange={handleChange}
          placeholder="email..."
        />
        <button>Add Friend</button>
      </form>
    </div>
  )
}

export default AddFriend;