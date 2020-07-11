import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GretingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import BenchIndexContainer from './benches/bench_index_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GretingContainer />
    </header>

    <AuthRoute exact path='/login' component={LoginFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
    <Route exact path='/' component={BenchIndexContainer} />
  </div>
);

export default App;
