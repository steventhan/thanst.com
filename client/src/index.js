import React from 'react';
import { Provider } from "react-redux";
import { render } from "react-snapshot";

import store from "./reduxStore";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
