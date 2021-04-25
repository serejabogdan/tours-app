import {combineReducers} from 'redux';
import searchReducer from './searchReducer';
import toursReducer from './toursReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  tours: toursReducer
});
