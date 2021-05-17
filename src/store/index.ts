import { createStore, applyMiddleware } from 'redux'
import reducers from './actions'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers,
  composeWithDevTools(
    applyMiddleware()
  ));

export default store;