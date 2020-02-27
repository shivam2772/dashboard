import React, { useState } from 'react';
import './login.scss';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = e => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.name);
    }
  };

  const handleOnClick = () => {};
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => handleOnChange(e)}
        />
        <input
          type={showPassword ? 'text' : 'password'}
          name="username"
          value={password}
          onChange={e => handleOnChange(e)}
        />
        <button onClick={() => handleOnClick()}>Login</button>
      </div>
    </div>
  );
};

export default Login;
