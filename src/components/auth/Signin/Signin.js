import React, {useState} from 'react';
import './Signin.css';

import {signin} from '../../../shared/utils/auth';
import {useHistory} from 'react-router';

function Signin() {
  const [formData, setFormData] = useState({login: 'a@gmail.com', password: '123123123'});
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    signin(formData.login, formData.password);
    history.push('/hot');
  }

  return (
    <form className='signin' onSubmit={handleSubmit}>
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
      <button className='submit-btn btn' type='submit'>
        Go!
      </button>
    </form>
  );
}

export default Signin;
