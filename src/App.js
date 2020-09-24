import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Welcome from './Components/Welcome/Welcome';
import Clock from './Components/clock/Clock';
import Navigation from './Components/navigation/Navigation'
import Jeopardy from './Components/jeopardy/Jeopardy';


function App() {
  return (
    <div className="App">

      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Mike" />}
        />
      </Switch>

      <Route
        path="welcom/:name"
        compenent={Welcome}
      />

      <Route
        path="/clock"
        component={Clock}
      />

      <Route
        path="/jeopardy"
        component={Jeopardy}
      />

      {/* <Route
        component={NotFound}
      /> */}

    </div>
  );
}

export default App;
