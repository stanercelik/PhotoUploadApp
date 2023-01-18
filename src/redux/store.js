import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import sessionReducer from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({sessionReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
