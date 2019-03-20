import React, {Component} from 'react';

class Login2 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userName : ''
    };
  }

  onSubmit = () => {
    this.props.onUsernameChange(this.state.userName);
  };
}

export default Login2;