import {SET_SEARCH_DATA} from '../../types';

const initialState = {
  country: '',
  city: '',
  startDate: '',
  endDate: ''
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
