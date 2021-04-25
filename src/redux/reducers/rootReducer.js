import {combineReducers} from 'redux';

import filtersReducer from './filtersReducer';
import searchReducer from './searchReducer';
import toursReducer from './toursReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  tours: toursReducer,
  filters: filtersReducer
});
