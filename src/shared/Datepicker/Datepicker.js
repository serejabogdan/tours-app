import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';
import DatePicker, {registerLocale} from 'react-datepicker';
import locale_uk from 'date-fns/locale/uk';
registerLocale('uk', locale_uk);

function Datepicker({classNames, startDate, setStartDate, endDate, setEndDate, ...props}) {
  return (
    <>
      <DatePicker
        className={`datepicker input ${classNames}`}
        locale="uk"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      <DatePicker
        className={`datepicker input ${classNames}`}
        locale="uk"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
}

export default Datepicker;
