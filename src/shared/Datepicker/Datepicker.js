import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';
import DatePicker, {registerLocale} from 'react-datepicker';
import locale_uk from 'date-fns/locale/uk';
registerLocale('uk', locale_uk);

function Datepicker({classNames, startDate, setStartDate, endDate, setEndDate, ...props}) {
  function maxDate(startDate, months) {
    const date = new Date(startDate);
    return new Date(date.setMonth(date.getMonth() + months));
  }

  return (
    <>
      <label className='welcome__label'>
        <span>Початок:</span>
        <DatePicker
          className={`datepicker input ${classNames}`}
          locale='uk'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={maxDate(new Date(), 12)}
        />
      </label>
      <label className='welcome__label'>
        <span>Кінець:</span>
        <DatePicker
          className={`datepicker input ${classNames}`}
          locale='uk'
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={maxDate(startDate, 1)}
        />
      </label>
    </>
  );
}

export default Datepicker;
