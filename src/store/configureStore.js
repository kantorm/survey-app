import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from "redux-form";

import surveys from './surveys';

export default (history) => {
  const reducer = combineReducers({
    surveys,
    routing: routerReducer,
    form: formReducer,
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
