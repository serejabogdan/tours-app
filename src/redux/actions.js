import {
  SET_SEARCH_DATA,
  CLEAR_FILTERS,
  REMOVE_FILTER,
  TOGGLE_FILTER,
  CHANGE_MIN_PRICE,
  CHANGE_MAX_PRICE,
  CHANGE_TOUR_NAME,
  SET_TOURS,
  SET_CURRENT_USER,
  SET_RESORTS,
  SET_USER
} from './types';

export function setSearchData(data) {
  return {
    type: SET_SEARCH_DATA,
    payload: data
  };
}

export function toggleFilter(filter) {
  return {
    type: TOGGLE_FILTER,
    payload: filter
  };
}

export function removeFilter(filter) {
  return {
    type: REMOVE_FILTER,
    payload: filter
  };
}

export function clearFilters(filters) {
  return {
    type: CLEAR_FILTERS,
    payload: filters
  };
}

export function changeMinPrice(price) {
  return {
    type: CHANGE_MIN_PRICE,
    payload: price
  };
}

export function changeMaxPrice(price) {
  return {
    type: CHANGE_MAX_PRICE,
    payload: price
  };
}

export function changeTourName(tourName) {
  return {
    type: CHANGE_TOUR_NAME,
    payload: tourName
  };
}

export function setTours(tours) {
  return {
    type: SET_TOURS,
    payload: tours
  };
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
}

export function setResorts(resorts) {
  return {
    type: SET_RESORTS,
    payload: resorts
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}
