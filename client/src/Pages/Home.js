import React, { Component } from 'react';
import {Button, Navbar, NavItem, Footer, Card, CardTitle} from 'react-materialize';
import Jumbotron from '../components/Jumbotron/index';
import { Link } from "react-router-dom";
import './style.css';

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
const sizer = {
  fontFamily: 'Coiny, cursive',
  margin: "auto",
  padding: "5px",
  backgroundColor: " rgb(255, 207, 75)",
  color: "black"
}

const colorer = {
  backgroundColor: " rgb(255, 207, 75)",
  width: "80vh",
  margin: "auto",
  fontFamily: 'Coiny, cursive',
  
}

const whiteText = {
  color: "white"
}



class Home extends Component {
  render() {
    return (
      <div className="App">
      <Navbar style = {navColor} brand='S.O.S' right>
        <NavItem>
          <Link to = {'/Login'}>Log-In</Link>
        </NavItem>
      </Navbar>
      <Jumbotron>
        <Card hoverable style = {colorer} header={<CardTitle reveal image={require('../IMG/Plan.jpg')} style = {sizer} waves='light'/>}
          title="Subscribe? or Save?"
          reveal = {<h2>Ever check your bank statement and see a charge from a service that you forgot to cancel or don't use? Try S.O.S! A subscription tracker designed to calculate monthly
            expenditures and remind users of how much they're spending. It is valuable
            as a tool to follow financial output and as a visual aid to show
            where money is going.</h2>}>
          <br></br>
          <Button waves='light'>
          <Link style = {whiteText} to = {'/Register'}>Sign Up</Link>
          </Button>
        </Card>
      </Jumbotron>
      <Footer style = {footerStyle}></Footer>
      </div>
    );
  }
}

export default Home;
