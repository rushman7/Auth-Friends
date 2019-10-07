import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h5>Welcome to Auth Friends where you can keep track of who you enjoy to be around!</h5>
      <Link to="/login"><button>Click Here to Login</button></Link>
    </div>
  )
}

export default Home;