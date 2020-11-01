import { compose, createStore } from 'redux';
import createRootReducer from './reducers';

import createMiddlewares from './middlewares';

const middlewares = createMiddlewares();

let composeEnhancers = compose;

function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancers(middlewares)
  )
  
  return store;
}

const store = configureStore();

export default store
