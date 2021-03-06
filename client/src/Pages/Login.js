import React, { Component } from 'react';
import {Card, Button, Navbar, NavItem, Footer} from 'react-materialize';
import Jumbotron from '../components/Jumbotron/index';
import { Container, Row, Col } from "../components/Grid/index";
import { Link } from "react-router-dom";
import './style.css';
import Input from '../components/Input';
import Axios from 'axios'

const footerStyle = {
  fontSize: "20px",
  color: "white",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  backgroundColor: "#57C478"
};

const navColor = {
  fontFamily: 'Coiny, cursive',
  backgroundColor: "#57C478"
}

const whiteText = {
  color: "white",
  fontFamily: 'Coiny, cursive'
}

const colorer = {
  backgroundColor: "#E9AE0B",
  width: "100vh",
  margin: "auto",
  alignSelf: "center",
  borderStyle: "Solid",
  borderColor: "#000000",
  display: "flex"
}

class Login extends Component {
    state = {
        userName: "",
        passWord: "",
      };
    
      handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        Axios({
          url: '/api/items/?userName=' + this.state.userName,
          method: 'get',
          data: {
            userName: ''
          }
        })
            .catch(err => console.log(err));
            console.log(this);
            alert("Logged into " + this.state.userName)
            this.setState({ 
            
            passWord: '',
            })
    
        };
  render() {
    return (
      <div className="App">
      <Navbar style = {navColor} brand='S.O.S' right>
        <NavItem>
          <Link to = {'/Register'}>Need to Register?</Link>
        </NavItem>
      </Navbar>
      <Jumbotron>
      <h1 style = {whiteText}>Log-In</h1>
        <Container>         
          <form>
              <Row>
                  <Col size= "xs-12 sm-12">
                      <Input
                      name="userName"
                      value={this.state.userName}
                      onChange={this.handleInputChange}
                      placeholder="UserName"
                      />
                  </Col>
              </Row>
              <Row>
                  <Col size= "xs-12 sm-12">
                      <Input
                      name="passWord"
                      value={this.state.passWord}
                      onChange={this.handleInputChange}
                      placeholder="Password"
                      />
                  </Col>
              </Row>
              <Row>
                  <Col size="xs-12 sm-12">
                      <Button waves = 'light' style = {whiteText}
                          onClick={this.handleFormSubmit}
                          type="success"
                          className="input-lg"
                          >
                          <Link to = {{pathname: '/Form2', state: this.state.userName}}>Log-In</Link>
                      </Button>
                  </Col>
              </Row>
            </form>
            
        </Container>
      </Jumbotron>
      <Footer style = {footerStyle}></Footer>
      </div>
    );
  }
}

export default Login;