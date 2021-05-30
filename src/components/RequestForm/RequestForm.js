import React, {useEffect, useState} from 'react';
import './RequestForm.css';

import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {useHistory} from 'react-router';
import {database} from '../../firebase.config';

function RequestForm({tour, search, userAuth, ...props}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors}
  } = useForm();
  const history = useHistory();

  useEffect(() => {
    if (userAuth) {
      database
        .ref(`users/${userAuth.uid}`)
        .get()
        .then((snapshot) => {
          setValue('name', snapshot.val().name);
          setValue('tel', snapshot.val().tel);
          setValue('email', snapshot.val().email);
        });
    }
    return () => {};
  }, []);

  function onSubmit(userData) {
    console.log(register('name', {required: true, pattern: /^\D+$/g}));
    orderFormation(userData);

    if (userAuth) {
      addOrderToUser();
    }
  }

  async function orderFormation(userData) {
    const order = Object.assign(
      {isActive: true},
      {tour},
      {
        search: {
          ...search,
          startDate: search.startDate.toDateString(),
          endDate: search.endDate.toDateString()
        }
      },
      {user: {...userData}}
    );
    const ref = database.ref(`/orders`);
    const pushedUrl = await ref.push(order);

    const key = await pushedUrl.getKey();
    await database.ref(`/orders/${key}`).update({id: key});
    props.setOrder(false);
  }

  async function addOrderToUser(userData) {
    const order = Object.assign(
      {},
      {tour},
      {
        search: {
          ...search,
          startDate: search.startDate.toDateString(),
          endDate: search.endDate.toDateString()
        }
      },
      {user: {...userData}}
    );
    const ref = await database.ref(`/users/${userAuth.uid}/orders`);
    const pushedUrl = await ref.push(order);

    const key = await pushedUrl.getKey();
    await database.ref(`/users/${userAuth.uid}/orders/${key}`).update({id: key});
  }

  return (
    <div className='black-overlay'>
      <div className='request-form'>
        <div className='request-form__board'>
          <div className='request-form__header'>
            <div className='request-form__title'>
              <h1 className='title'>Оформлення заявки на тур</h1>
              <span className='request-from__message'>Заповніть форму і ми зателефонуємо вам найближчим часом!</span>
            </div>
            <div className='request-form__close-button'>
              <button onClick={() => props.setOrder(false)}>&#10006;</button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='request-form__fields'>
              <label>
                <span>Ім'я:</span>
                <input
                  className={`input ${errors.name && 'input-error'}`}
                  type='text'
                  {...register('name', {required: true, pattern: /^\D+$/g})}
                />
              </label>
              <label>
                <span>Телефон:</span>
                <input
                  className={`input ${errors.tel && 'input-error'}`}
                  type='tel'
                  {...register('tel', {required: true, pattern: /^0\d{8}\d$/i})}
                />
              </label>
              <label>
                <span>E-mail:</span>
                <input
                  className={`input ${errors.email && 'input-error'}`}
                  type='email'
                  {...register('email', {required: true, pattern: /@.+\..+/i})}
                />
              </label>
            </div>
            <button type='submit' className='submit-btn btn'>
              Оформити
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userAuth: state.userAuth.currentUser
  };
};

export default connect(mapStateToProps)(RequestForm);
