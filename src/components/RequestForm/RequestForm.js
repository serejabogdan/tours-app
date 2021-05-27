import React, {useState} from 'react';
import {connect} from 'react-redux';
import {database} from '../../firebase.config';
import './RequestForm.css';

function RequestForm({tour, search, userAuth, ...props}) {
  const [state, setstate] = useState({name: '', tel: '', email: ''});

  function changeState(e, attr) {
    const value = e.target.value;
    setstate((state) => ({...state, [attr]: value}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    orderFormation();
    addOrderToUser();
  }

  function orderFormation() {
    console.log();
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
      {user: {...state}}
    );
    const ref = database.ref(`/orders`);
    ref.push(order);
    props.setOrder(false);
  }

  function addOrderToUser() {
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
      {user: {...state}}
    );
    const ref = database.ref(`/users/${userAuth.uid}/orders`);
    ref.push(order);
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
          <form onSubmit={handleSubmit}>
            <div className='request-form__fields'>
              <label>
                <span>Ім'я:</span>
                <input className='input' type='text' value={state.name} onChange={(e) => changeState(e, 'name')} />
              </label>
              <label>
                <span>Телефон:</span>
                <input className='input' type='text' value={state.tel} onChange={(e) => changeState(e, 'tel')} />
              </label>
              <label>
                <span>E-mail:</span>
                <input className='input' type='text' value={state.email} onChange={(e) => changeState(e, 'email')} />
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
