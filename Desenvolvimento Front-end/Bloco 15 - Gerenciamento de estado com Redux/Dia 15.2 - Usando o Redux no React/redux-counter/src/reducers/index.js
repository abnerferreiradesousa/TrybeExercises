import { combineReducers } from 'redux';
import myReducer from './countReducer';

const rootReducer = combineReducers({
  myReducer,
});

export default rootReducer;
