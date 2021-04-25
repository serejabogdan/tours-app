import {SET_SEARCH_DATA} from './types';

export function setSearchData(data) {
  return {
    type: SET_SEARCH_DATA,
    payload: data
  };
}
