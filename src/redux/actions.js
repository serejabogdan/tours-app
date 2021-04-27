import {
  SET_SEARCH_DATA,
  CLEAR_FILTERS,
  REMOVE_FILTER,
  TOGGLE_FILTER,
  CHANGE_MIN_PRICE,
  CHANGE_MAX_PRICE,
  CHANGE_TOUR_NAME
} from './types';

export function setSearchData(data) {
  return {
    type: SET_SEARCH_DATA,
    payload: data
  };
}

export function toggleFilter(data) {
  return {
    type: TOGGLE_FILTER,
    payload: data
  };
}

export function removeFilter(data) {
  return {
    type: REMOVE_FILTER,
    payload: data
  };
}

export function clearFilters(data) {
  return {
    type: CLEAR_FILTERS,
    payload: data
  };
}

export function changeMinPrice(data) {
  return {
    type: CHANGE_MIN_PRICE,
    payload: data
  };
}

export function changeMaxPrice(data) {
  return {
    type: CHANGE_MAX_PRICE,
    payload: data
  };
}

export function changeTourName(data) {
  return {
    type: CHANGE_TOUR_NAME,
    payload: data
  };
}
