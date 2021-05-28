import React, {useState} from 'react';
import './Signin.css';

import {signin} from '../../../shared/utils/auth';
import {useHistory} from 'react-router';
import {useForm} from 'react-hook-form';

function Signin() {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();
  const history = useHistory();

  function onSubmit(data) {
    const {email, password} = data;
    signin(email, password);
    history.push('/hot');
  }

  return (
    <div className='signin'>
      <div className='signin__right-side'>
        <form className='signin__form' onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>E-mail:</span>
            <input
              className={`input ${errors.email && 'input-error'}`}
              type='email'
              {...register('email', {required: true, pattern: /.+@.+\..+/i})}
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
            Увійти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
