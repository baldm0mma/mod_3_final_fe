import { combineReducers } from 'redux';
import { animalsReducer } from './animalsReducer';
import { setErrorMessageReducer } from './setErrorMessageReducer';
import { toggleLoadingReducer } from './toggleLoadingReducer';

export const rootReducer = combineReducers({
  animals: animalsReducer,
  hasErrored: setErrorMessageReducer,
  isLoading: toggleLoadingReducer
});
