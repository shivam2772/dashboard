import React, { useState } from 'react';
import { connect } from 'react-redux';
import { initiateLoginRequest, loginFailure, loginSuccess } from './action';
import './login.scss';

const Login = props => {
  const [username, setUsername] = useState('');
  const [usernameErr, setUsernameErr] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    login,
    fnInitiateLogin,
    fnInitiateLoginFailure,
    fnInitiateLoginSuccess,
    history
  } = props;

  const handleOnChange = e => {
    if (e.target.name === 'username') {
      if (usernameErr) {
        setUsernameErr(false);
      }
      setUsername(e.target.value);
    } else {
      if (passwordErr) {
        setPasswordErr(false);
      }
      setPassword(e.target.value);
    }
  };

  const handleOnClick = e => {
    console.log(props);
    e.preventDefault();
    let err = false;
    if (!username) {
      setUsernameErr('Required Field');
    }
    if (!password) {
      setPasswordErr('Required Field');
    }
    if (username && password) {
      fnInitiateLogin();
      if (username !== 'hruday@gmail.com') {
        err = true;
      } else if (password !== 'hruday123') {
        err = true;
      }
      if (err) {
        // call error action
        fnInitiateLoginFailure();
      } else {
        // call login action
        fnInitiateLoginSuccess();
        history.push('/dashboard');
      }
    }
  };
  return (
    <div className="login">
      <h2>Login</h2>
      {login.error ? (
        <div className="error-block">Invalid Username or password</div>
      ) : null}
      <div className="login__container">
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => handleOnChange(e)}
        />
        {!login.error && usernameErr ? (
          <span className="error-text">{usernameErr}</span>
        ) : null}
        <div className="login__container__password">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={e => handleOnChange(e)}
            className="password"
          />
          <button
            className="show-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'hide' : 'show'}
          </button>
        </div>
        {!login.error && passwordErr ? (
          <span className="error-text">{passwordErr}</span>
        ) : null}
        <button onClick={e => handleOnClick(e)}>Login</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  fnInitiateLogin: () => dispatch(initiateLoginRequest()),
  fnInitiateLoginSuccess: () => dispatch(loginSuccess()),
  fnInitiateLoginFailure: () => dispatch(loginFailure())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
