import React, { Component } from 'react';
import {Card,Button, Navbar, NavItem, Footer} from 'react-materialize';
import Jumbotron from '../components/Jumbotron/index';
import { Container, Row, Col } from "../components/Grid/index";
import API from "../utils/API";
import { Link } from "react-router-dom";
import './style.css';
import Input from '../components/Input';

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
  borderColor: "#000000"
}


class Register extends Component {
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
            console.log(this);
            alert("Account Succesfully Created!")
            this.setState({ 
            userName: '',
            passWord: '',
            })
    
        };
  render() {
    return (
      <div className="App">
      <Navbar style = {navColor} brand='S.O.S' right>
        <NavItem>
          <Link to = {'/Login'}>Already Registered? Log-In</Link>
        </NavItem>
      </Navbar>
      <Jumbotron>
      <h1 style = {whiteText}>Register and Start Saving!</h1>
        <Container >
          
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
                    placeholder="Password (Min 6 characters)"
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
                        <Link style = {whiteText} to = {'/Login'}>Submit</Link>
                        
                    </Button>
                </Col>
            </Row>
          
        </Container>
      </Jumbotron>
      <Footer style = {footerStyle}></Footer>
      </div>
    );
  }
}

export default Register;