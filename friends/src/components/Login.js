import React,{ useState } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth';

const Login = props => {
  const initialState = {
    credentials: {
      username: '',
      password: '',
    }
  }

  const [loginData, setLoginData] = useState(initialState)

  const handleChange = e => {
    setLoginData({
      credentials: {
        ...loginData.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', loginData.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends')
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login} className="login-form">
        <input 
          type="text"
          name="username"
          value={loginData.credentials.username}
          onChange={handleChange}
          placeholder="username..."
        />
        <input 
          type="password"
          name="password"
          value={loginData.credentials.password}
          onChange={handleChange}
          placeholder="password..."
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;