import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const history = useHistory();

const submit = async (e) => {
  e.preventDefault();
  await login(username, password);
  history.pushState('/users');
};

return (
  <form onSubmit={submit}>
     <input
       type="text"
       placeholder="Username"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
     />
     <input
       type="password"
       placeholder="Password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
     />
     <button type="submit">Login</button>
  </form>
 );
};

 export default Login;

