import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <br />
      <Link to="/register">Register</Link>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

