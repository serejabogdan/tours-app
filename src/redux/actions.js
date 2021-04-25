import {SET_SEARCH_DATA, CLEAR_FILTERS, REMOVE_FILTER, TOGGLE_FILTER} from './types';

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
