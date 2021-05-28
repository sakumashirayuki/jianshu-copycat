import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from "./common/header/index";
import Home from "./pages/home/index";
const DetailComponent  = React.lazy(()=>import("./pages/detail/index"));
const LoginComponent = React.lazy(()=>import("./pages/login/index.jsx"));
const SignupComponent = React.lazy(()=>import("./pages/signup/index"));
const WriteComponent = React.lazy(()=>import("./pages/write/index"));
const UserComponent = React.lazy(()=>import("./pages/user/index"));

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
          <Route path='/signup' exact>
            <Suspense fallback={<div>Loading...</div>}>
              <SignupComponent />
            </Suspense>
          </Route>
          <Route path='/write' exact>
            <Suspense fallback={<div>Loading...</div>}>
              <WriteComponent />
            </Suspense>
          </Route>
          <Route path='/user' exact>
            <Suspense fallback={<div>Loading...</div>}>
              <UserComponent />
            </Suspense>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
