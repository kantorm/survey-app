import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension'

export default (history) => {
  const reducer = combineReducers({
    routing: routerReducer,
  });

  const routingMiddleware = routerMiddleware(history);

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
      routingMiddleware,
      thunkMiddleware,
    )),
  );

  return store;
};
