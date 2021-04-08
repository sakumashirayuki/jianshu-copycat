import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import GlobalStyle from "./style"
import GlobalIconFont from "./statics/iconfont/iconfont"
import App from './App';
import store from "./store/index"

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <GlobalIconFont />
    <App />
  </Provider>,
  document.getElementById('root')
);
