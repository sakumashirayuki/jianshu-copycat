import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from "./common/header/index";
import Home from "./pages/home/index";
const DetailComponent  = React.lazy(()=>import("./pages/detail/index"));
// import Detail from "./pages/detail/index";
const LoginComponent = React.lazy(()=>import("./pages/login/index.jsx"));
// import Login from "./pages/login/index.jsx";
const WriteComponent = React.lazy(()=>import("./pages/write/index"));
// import Write from "./pages/write/index";

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
            <Suspense fallback={<div>Loading...</div>}>
              <DetailComponent />
            </Suspense>
          </Route>
          <Route path='/login' exact>
            <Suspense fallback={<div>Loading...</div>}>
              <LoginComponent />
            </Suspense>
          </Route>
          <Route path='/write' exact>
            <Suspense fallback={<div>Loading...</div>}>
              <WriteComponent />
            </Suspense>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
