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
    return parsedData;
  }
  return {
    country: 'Єгипет',
    city: 'Київ',
    startDate: new Date(),
    endDate: generateEndDate(),
    adults: 2,
    children: 0
  };
}

function generateEndDate() {
  const date = new Date();
  return new Date(date.setDate(date.getDate() + 7));
}

export const searchReducer = (state = initialState(), action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return {...state.main, ...action.payload};
    default:
      return state;
  }
};
