import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Subscriptions from './Pages/Subscriptions';
import FormTwo from './Pages/Form2';
import Register from './Pages/Register';
import Login from './Pages/Login';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/Home" component={Home} />
          <Route exact path = "/Subscriptions" component={Subscriptions} />
          <Route exact path = "/Form2" component={FormTwo} />
          <Route exact path = "/Register" component={Register} />
          <Route exact path = "/Login" component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
