import React, {useState} from 'react';
import './Signup.css';

import {signup} from '../../../shared/utils/auth';
import {useHistory} from 'react-router';
import {useForm} from 'react-hook-form';
import {auth, database} from '../../../firebase.config';

function Signup() {
  // const [formData, setFormData] = useState({login: 'balgar@gmail.com', password: '123123', passwordConfirm: ''});
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const history = useHistory();

  function onSubmit(data) {
    const {name, email, tel, password} = data;
    signup(email, password).then((user) =>
      auth.onAuthStateChanged((user) => {
        const ref = database.ref(`users/${user.uid}`);
        ref.set({name, email, tel});
        history.push('/search/result');
      })
    );
  }

  return (
    <div className='signup'>
      <div className='signup__left-side'>
        <h2>Company</h2>
        <h1>Розпочни свою подорож.</h1>
        <h1 className='signup__main-title'>Сьогодні.</h1>
      </div>
      <div className='signup__right-side'>
        <form className='signup__form' onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>І'мя:</span>
            <input
              className={`input ${errors.name && 'input-error'}`}
              type='text'
              {...register('name', {required: true, pattern: /^\D+$/g})}
            />
          </label>
          <label>
            <span>E-mail:</span>
            <input
              className={`input ${errors.email && 'input-error'}`}
              type='email'
              {...register('email', {required: true, pattern: /.+@.+\..+/i})}
            />
          </label>
          <label>
            <span>Номер:</span>
            <input
              className={`input ${errors.tel && 'input-error'}`}
              type='tel'
              {...register('tel', {required: true, pattern: /^0\d{8}\d$/i})}
            />
          </label>
          <label>
            <span>Пароль:</span>
            <input
              className={`input ${errors.password && 'input-error'}`}
              type='password'
              {...register('password', {required: true})}
            />
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
