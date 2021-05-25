import {SET_SEARCH_DATA} from '../../types';

// TODO: fix DATE
const initialState = {
  main: {
    country: 'Єгипет',
    city: 'Київ',
    startDate: new Date(),
    endDate: generateEndDate(),
    adults: 2,
    children: 0
  }
};

function generateEndDate() {
  const date = new Date();
  return new Date(date.setDate(date.getDate() + 7));
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return {main: {...state.main, ...action.payload}};
    default:
      return state;
  }
};
