import { combineReducers } from  'redux';
import { requestReducer } from './requestReduser';

export const rootReducer = combineReducers({
  requests: requestReducer,
});