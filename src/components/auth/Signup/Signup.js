import React, {useState} from 'react';
import './Signup.css';

import {signup} from '../../../shared/utils/auth';
import {useHistory} from 'react-router';

function Signup() {
  const [formData, setFormData] = useState({login: '', password: '', passwordConfirm: ''});
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    signup(formData.login, formData.password);
    history.push('/hot');
  }

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <label>
        <span>Login:</span>
        <input
          className='input'
          type='text'
          value={formData.login}
          onChange={(e) => setFormData((prevState) => ({...prevState, login: e.target.value}))}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          className='input'
          type='password'
          value={formData.password}
          onChange={(e) => setFormData((prevState) => ({...prevState, password: e.target.value}))}
        />
      </label>
      <label>
        <span>Confirm password:</span>
        <input
          className='input'
          type='password'
          value={formData.passwordConfirm}
          onChange={(e) => setFormData((prevState) => ({...prevState, passwordConfirm: e.target.value}))}
        />
      </label>
      <button className='submit-btn btn' type='submit'>
        Go!
      </button>
    </form>
  );
}

export default Signup;
