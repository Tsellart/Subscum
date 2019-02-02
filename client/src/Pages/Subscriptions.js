import React, { Component } from 'react';
import {Navbar, NavItem, Footer, Table} from 'react-materialize';
import Jumbotron from '../components/Jumbotron/index';
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid/index";
import Input from "../components/Input/index";
import Button from "../components/Button/index";

const footerStyle = {
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  backgroundColor: "#57C478"
};

const navColor = {
  backgroundColor: "#57C478"
};

const whiteText = {
  color: "white",
  backgroundColor: "E9AE0B"
};


class Subscriptions extends Component {
      state = {
      Items: [],
      userName: '',
      service: '',
      price: '',
      rate: ''
    }
  

  deleteSub = service => {
    API.deleteSubs(service)
    .then(res => this.getyourSub({userName: this.state.userName}))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getSubs()
    .then(res => this.setState({ Items: res.data, service: '', price: '', rate: ''})
    )
    .catch(err => console.log(err));
    console.log(this);
  };

  render() {
    return (
      <div className="App">
      <Navbar style = {navColor} brand='S.O.S' right>
      <NavItem>
        <Link to = {'/Form2'}>Manage Subscriptions</Link>
      </NavItem>
      <NavItem>
        <Link to = {'/home'}>Log-Out</Link>
      </NavItem>
      </Navbar>
      <Jumbotron>
        <Container >
          <Row>
            <Col size="xs-3 sm-4">
              <h2 style = {whiteText}>Enter your Username</h2>
            </Col>
          </Row>
          <Row>
            <Col size="xs-3 sm-4">
              <Input 
                name="userName"
                value={this.state.userName}
                onChange={this.handleInputChange}
                placeholder="Username"
              />
            </Col>
            <Col size="xs-3 sm-2">
              <Button style = {whiteText}
                onClick={this.handleFormSubmit}
                type="success"
                className="input-lg"
                >Fetch
              </Button>
            </Col>
          </Row>
        </Container>
        <h1 style = {whiteText}>Your Subscriptions</h1>
        <Table className="striped">
          <thead>
            <tr>
              <th><strong>Service</strong></th>
              <th><strong>Price</strong></th>
              <th><strong>Rate</strong></th>
            </tr>
          </thead>
          {this.state.userName.length ? (
            <tbody>
              {this.state.Items.map(Items => {
                return (
                  <tr>
                    <td key = {Items._id}>{Items.service}</td>
                    <td>{Items.price}</td>
                    <td>{Items.rate}</td>
                  </tr>
                );
              })}
            </tbody>
          ): (<h3>no results to display</h3>)}
        </Table>
        <h1 style = {whiteText}>Total Cost: </h1>
        <ul>
        {this.state.Items.map((Items)=><li>{Items.price}</li>)}
        </ul>


        
      </Jumbotron>
      <Footer style = {footerStyle}></Footer>
      </div>
    );
  }
}

export default Subscriptions;
