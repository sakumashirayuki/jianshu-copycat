import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./style"
import GlobalIconFont from "./statics/iconfont/iconfont"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalIconFont />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
