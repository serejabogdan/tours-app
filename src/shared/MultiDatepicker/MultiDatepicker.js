import React, {useEffect, useState} from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import './MultiDatepicker.css';
import DatePicker, {registerLocale} from 'react-datepicker';
import locale_uk from 'date-fns/locale/uk';
import {dateOffsetByDays, dateOffsetByMonths} from '../utils/date';
registerLocale('uk', locale_uk);

function MultiDatepicker({classNames, startDate, setStartDate, endDate, setEndDate, ...props}) {
  return (
    <>
      <label className='welcome__label'>
        <span>Початок:</span>
        <DatePicker
          className={`datepicker input ${classNames}`}
          locale='uk'
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setEndDate(dateOffsetByDays(date, 7));
          }}
          selectsStart
          startDate={startDate}
          dateFormat='dd.MM.yyyy'
          endDate={endDate}
          minDate={dateOffsetByDays(new Date(), 7)}
          maxDate={dateOffsetByMonths(new Date(), 12)}
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
          dateFormat='dd.MM.yyyy'
          endDate={endDate}
          minDate={startDate}
          maxDate={dateOffsetByMonths(startDate, 1)}
        />
      </label>
    </>
  );
}

export default MultiDatepicker;
