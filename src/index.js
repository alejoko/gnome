import React from 'react';
import ReactDOM from 'react-dom';

//Redux and Reducer Imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./store";
import { composeWithDevTools } from "redux-devtools-extension";

//Create Redux Store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <div />
  </Provider>,
  document.getElementById('root')
);
