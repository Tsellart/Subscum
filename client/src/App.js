import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Subscriptions from './Pages/Subscriptions';
import FormTwo from './Pages/Form2';
import Register from './Pages/Register';
import Login from './Pages/Login';

const UsernameContext = React.createContext('');

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      userName: ''   };
  }

  onUsernameChange = (userName) => {
    this.setstate({
      userName: userName
    });
  }
  render() {

    return (
      <Router>
        <div>
        <UsernameContext.Provider value= {this.state.userName}>
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/Home" component={Home} />
            <Route exact path = "/Subscriptions" component={Subscriptions} userName = {this.state.userName} />
            <Route exact path = "/Form2" component={FormTwo} userName = {this.state.userName} />
            <Route exact path = "/Register" component={Register} />
            <Route exact path = "/Login" component={Login} onUsernameChange = {this.onUsernameChange} />
          </Switch>
        </UsernameContext.Provider>
        </div>
      </Router>
    )
  }
}





export default App;


