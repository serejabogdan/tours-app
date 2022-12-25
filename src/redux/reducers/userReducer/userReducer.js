import {SET_USER} from '../../types';

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state.user, ...action.payload};
    default:
      return state;
  }
};
