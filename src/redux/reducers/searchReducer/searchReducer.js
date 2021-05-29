import {dateOffsetByDays} from '../../../shared/utils/date';
import {SET_SEARCH_DATA} from '../../types';

/* const initialState = {
  country: 'Єгипет',
  city: 'Київ',
  startDate: new Date(),
  endDate: generateEndDate(),
  adults: 2,
  children: 0
}; */

function initialState() {
  const localStorageData = localStorage.getItem('search');
  if (localStorageData) {
    const parsedData = JSON.parse(localStorageData);
    parsedData.startDate = new Date(parsedData.startDate);
    parsedData.endDate = new Date(parsedData.endDate);
    const startDate = dateOffsetByDays(new Date(), 7);
    const endDate = dateOffsetByDays(new Date(), 14);
    if (parsedData.startDate < startDate) {
      parsedData.startDate = startDate;
    }
    if (parsedData.endDate < endDate) {
      parsedData.endDate = endDate;
    }
    return parsedData;
  }
  return {
    country: 'Єгипет',
    city: 'Київ',
    startDate: dateOffsetByDays(new Date(), 7),
    endDate: dateOffsetByDays(new Date(), 14),
    adults: 2,
    children: 0
  };
}

export const searchReducer = (state = initialState(), action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return {...state.main, ...action.payload};
    default:
      return state;
  }
};
