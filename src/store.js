import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk';
import setupFirebase from './setupFirebase'
import auth, { enableSync, disableSync } from './state/auth'

setupFirebase();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  persistState(['auth'], { key: 'calcoFit'})
);

const reducer = combineReducers({
  auth
});

const store = createStore(
  reducer,
  enhancer
);

store.dispatch(enableSync());

export default store