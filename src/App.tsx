import React from 'react';
// Routing
// https://reactrouter.com/web/guides/quick-start
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
// My components
//import Signup from './components/sign-up/sign-up.component';

// Pages
import { HomePage } from './pages/homepage/homepage.component';
import { SignupPage } from './pages/signup/signup.component';
import { SigninPage } from './pages/signin/sigin.component';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/signin" component={SigninPage}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
