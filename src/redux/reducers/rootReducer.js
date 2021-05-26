import {combineReducers} from 'redux';

import searchReducer from './searchReducer';
import toursReducer from './toursReducer';
import filtersReducer from './filtersReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  tours: toursReducer,
  filters: filtersReducer,
  userAuth: authReducer,
  user: userReducer
});
