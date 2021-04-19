import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from "./common/header/index";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import Login from "./pages/login/index.jsx";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route path='/' exact>
            <Header />
            <Home />
          </Route>
          <Route path='/detail/:id' exact>
            <Header />
            <Detail />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
