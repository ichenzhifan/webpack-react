import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../models';

let storeEnhancers;
if (process.env.NODE_ENV === 'production') {
  storeEnhancers = compose(thunk);
} else {
  storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk)));
}

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, storeEnhancers);

  if (module.hot && process.env.NODE_ENV !== 'production') {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../models', () => {
      console.log('replacing reducer...');

      const nextRootReducer = require('../models').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore();
