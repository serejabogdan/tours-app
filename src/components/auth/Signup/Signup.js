import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className='signup'>
      <label>
        <span>Login:</span>
        <input className='input' type='text' value={''} onChange={(e) => console.log(e)} />
      </label>
      <label>
        <span>Password:</span>
        <input className='input' type='text' value={''} onChange={(e) => console.log(e)} />
      </label>
      <label>
        <span>Conform password:</span>
        <input className='input' type='text' value={''} onChange={(e) => console.log(e)} />
      </label>
      <button className='submit-btn btn' type='submit'>
        Go!
      </button>
    </div>
  );
}

export default Signup;
