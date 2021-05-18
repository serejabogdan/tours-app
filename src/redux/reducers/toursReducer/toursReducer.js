import { SET_TOURS } from '../../types';

const initialState = [];

export const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOURS:
      return [action.payload];
    default:
      return state;
  }
};
