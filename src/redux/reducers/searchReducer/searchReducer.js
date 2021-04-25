import {SET_SEARCH_DATA} from '../../types';

const initialState = {
  main: {
    country: 'Єгипет',
    city: 'Київ',
    startDate: new Date(),
    endDate: new Date()
  }
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return {main: {...state.main, ...action.payload}};
    default:
      return state;
  }
};
