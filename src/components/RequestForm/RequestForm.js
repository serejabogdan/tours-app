import React from 'react';
import './RequestForm.css';

function RequestForm() {
  return (
    <div className='request-form'>
      <div className='request-form__board'>
        <h1 className='title'>Оформлення заявки на тур</h1>

        <form>
          <div className='request-form__fields'>
            <label>
              <span>Ім'я:</span>
              <input className='input' type='text' />
            </label>
            <label>
              <span>Прізвище:</span>
              <input className='input' type='text' />
            </label>
            <label>
              <span>Дата народження:</span>
              <input className='input' type='text' />
            </label>
            <label>
              <span>Паспорт:</span>
              <input className='input' type='text' />
            </label>
            <label>
              <span>Дійсний до:</span>
              <input className='input' type='text' />
            </label>
          </div>
          <button type='submit' className='submit-btn btn'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestForm;
