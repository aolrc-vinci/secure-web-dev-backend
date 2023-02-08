import React from 'react';

const Register = () => {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
