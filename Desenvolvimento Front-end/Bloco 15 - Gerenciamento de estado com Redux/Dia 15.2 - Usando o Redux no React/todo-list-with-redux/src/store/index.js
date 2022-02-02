import { createStore, combineReducers } from 'redux';
import saveTaskReducer from '../reducers';

const rootReducer = combineReducers({ saveTaskReducer });

const store = createStore(rootReducer);

export default store;