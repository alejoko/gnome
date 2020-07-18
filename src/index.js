import React from 'react';
import ReactDOM from 'react-dom';

//Redux and Reducer Imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./store/ducks";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";

//Create Redux Store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
