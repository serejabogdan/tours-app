import {CLEAR_FILTERS, TOGGLE_FILTER, REMOVE_FILTER} from '../../types';

const initialState = [];

export const filtersReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case TOGGLE_FILTER:
      if (state.includes(action.payload)) {
        return state.filter((filter) => filter !== action.payload);
      } else {
        return state.concat([action.payload]);
      }
    case REMOVE_FILTER:
      return state.filter((filter) => filter !== action.payload);
    case CLEAR_FILTERS:
      console.log(state);
      return [];
    default:
      return state;
  }
};
