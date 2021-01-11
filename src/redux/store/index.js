import { createStore, compose } from 'redux';
import reducers from '../reducers';
import {loadState, saveState} from '../../utils/localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

const store = createStore(reducers,persistedState,composeEnhancers());

store.subscribe (() => {
  saveState({
    favoritesReducer: store.getState().favoritesReducer
  })
})

export default store;