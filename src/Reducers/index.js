import { combineReducers } from 'redux';
import { animalsReducer } from './animalsReducer';
import { setErrorMessageReducer } from './setErrorMessageReducer';
import { toggleLoadingReducer } from './toggleLoadingReducer';
import { setDonationsData } from './setDonationsDataReducer';

export const rootReducer = combineReducers({
  animals: animalsReducer,
  donations: setDonationsData,
  hasErrored: setErrorMessageReducer,
  isLoading: toggleLoadingReducer
});
