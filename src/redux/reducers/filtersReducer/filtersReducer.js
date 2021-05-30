import {
  CLEAR_FILTERS,
  TOGGLE_FILTER,
  REMOVE_FILTER,
  CHANGE_MIN_PRICE,
  CHANGE_MAX_PRICE,
  CHANGE_TOUR_NAME,
  SET_RESORTS
} from '../../types';

const initialState = {
  minPrice: 0,
  maxPrice: 400000,
  tourName: '',
  selected: [],
  resorts: []
};

export const filtersReducer = (state = initialState, action) => {
  const {selected} = state;
  const toggleFilter = selected.filter((filter) => filter !== action.payload);
  switch (action.type) {
    case TOGGLE_FILTER:
      if (selected.includes(action.payload)) {
        return {...state, selected: toggleFilter};
      } else {
        return {...state, selected: selected.concat([action.payload])};
      }
    case REMOVE_FILTER:
      return {...state, selected: toggleFilter};
    case CLEAR_FILTERS:
      return {...state, selected: []};

    case CHANGE_MIN_PRICE:
      return {...state, minPrice: action.payload};
    case CHANGE_MAX_PRICE:
      return {...state, maxPrice: action.payload};
    case CHANGE_TOUR_NAME:
      return {...state, tourName: action.payload};
    case SET_RESORTS:
      return {...state, resorts: action.payload};
    default:
      return state;
  }
};
