import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';
import {loadState, saveState} from '../../utils/localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

const store = createStore(reducers,persistedState,composeEnhancers(applyMiddleware(reduxThunk)));


store.subscribe (() => {
  saveState({
    favoritePokemons: store.getState().favoritePokemons,
    searchPokemons: store.getState().searchPokemons,
  })
})

export default store;