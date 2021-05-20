import React from 'react';
import './Signin.css';

function Signin() {
  return (
    <div className='signin'>
      <label>
        <span>Login:</span>
        <input className='input' type='text' value={''} onChange={(e) => console.log(e)} />
      </label>
      <label>
        <span>Password:</span>
        <input className='input' type='text' value={''} onChange={(e) => console.log(e)} />
      </label>
      <button className='submit-btn btn' type='submit'>
        Go!
      </button>
    </div>
  );
}

export default Signin;
