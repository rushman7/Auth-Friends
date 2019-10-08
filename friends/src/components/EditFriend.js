import React,{ useState } from 'react';
import { updateFriend } from '../actions';
import { connect } from 'react-redux';

const EditFriend = (props) => {
  const id = props.match.params.id;
  const [editFriend, setEditFriend] = useState({
    name: 'name',
    age: 0,
    email: 'email',
    id: id
  })

  const check = () => {
    console.log(props)
  }

  const handleChange = e => {
    setEditFriend({ ...editFriend, [e.target.name]: e.target.value });
  };

  const onEditFriend = e => {
    e.preventDefault();
    props.updateFriend(editFriend, id)
    props.history.push('/friends')
  }
  
  return (
    <div>
      <button onClick={check}>Check?</button>
      <form onSubmit={onEditFriend} className="login-form">
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

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friend: friendsReducer.friend
  }
}

export default connect(mapStateToProps, { updateFriend })(EditFriend);