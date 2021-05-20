import {combineReducers} from 'redux';

import searchReducer from './searchReducer';
import toursReducer from './toursReducer';
import filtersReducer from './filtersReducer';
import authReducer from './authReducer.js';

export const rootReducer = combineReducers({
  search: searchReducer,
  tours: toursReducer,
  filters: filtersReducer,
  userAuth: authReducer
});
