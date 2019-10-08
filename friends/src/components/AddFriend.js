import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

const AddFriend = props => {
  const initialState = {
    name: '',
    age: 0,
    email: '',
  }

  const [friend, setFriend] = useState(initialState)

  const addFriend = e => {
    e.preventDefault();
    console.log(friend)
    props.addFriend(friend)
    setFriend(initialState)
  }

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={addFriend} className="login-form">
        <input 
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
          placeholder="name..."
        />
        <input 
          type="age"
          name="age"
          value={friend.age}
          onChange={handleChange}
          placeholder="age..."
        />
        <input 
          type="email"
          name="email"
          value={friend.email}
          onChange={handleChange}
          placeholder="email..."
        />
        <button>Add Friend</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { addFriend })(AddFriend);