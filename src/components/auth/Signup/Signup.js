import React, {useState} from 'react';
import './Signup.css';

import {signup} from '../../../shared/utils/auth';
import {useHistory} from 'react-router';

function Signup() {
  const [formData, setFormData] = useState({login: 'balgar@gmail.com', password: '123123', passwordConfirm: ''});
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    signup(formData.login, formData.password);
    history.push('/hot');
  }

  return (
    <div className='signup'>
      <div className='signup__left-side'>
        <h2>Company</h2>
        <h1>Розпочни свою подорож.</h1>
        <h1 className='signup__main-title'>Сьогодні.</h1>
      </div>
      <div className='signup__right-side'>
        <form className='signup__form' onSubmit={handleSubmit}>
          <label>
            <span>І'мя:</span>
            <input className='input' type='text' />
          </label>
          <label>
            <span>E-mail:</span>
            <input className='input' type='email' />
          </label>
          <label>
            <span>Пароль:</span>
            <input className='input' type='password' />
          </label>
          <label>
            <span>Пароль:</span>
            <input className='input' type='password' />
          </label>
          <button className='submit-btn btn' type='submit'>
            До зірок!
          </button>
        </form>
      </div>
    </div>
  );
  /* (
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
  ); */
}

export default Signup;
