import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from "./common/header/index";
import Home from "./pages/home/index"
import Detail from "./pages/detail/index"

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/detail' exact>
            <Detail />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
