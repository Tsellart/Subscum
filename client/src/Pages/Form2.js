import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index";
import Input from "../components/Input/index";
import Button from "../components/Button/index";
import API from "../utils/API";
import {Navbar, NavItem, Footer} from 'react-materialize';
import { Container, Row, Col } from "../components/Grid/index";
import { Link } from "react-router-dom";

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
    fontFamily: 'Major Mono Display, monospace',
    backgroundColor: "#57C478"
};

const conatinerColor = {
    Color: "#E9AE0B"
};

const whiteText = {
    color: "white",
    backgroundColor: "E9AE0B"
};

class FormTwo extends Component {
  state = {
    userName: this.props.location.state,
    service: "",
    price: "",
    rate: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveSubs({
        userName: this.state.userName,
        service: this.state.service,
        price: this.state.price,
        rate: this.state.rate,
    })
        .catch(err => console.log(err));
        console.log(this);
        this.setState({ 
        service: '',
        price: '',
        rate: '',
        })

    };

  render() {
    return (
        <div>
            <Navbar style = {navColor} brand='S.O.S' right>
                <NavItem>
                    <Link to = {{ pathname: '/Subscriptions', state: this.state.userName}}>My Subscriptions</Link>
                </NavItem>
                <NavItem>
                    <Link to = {'/Home'}>Sign-Out</Link>
                </NavItem>
            </Navbar>
            <Jumbotron>
                <Container>
                    <h1 style = {whiteText}>Enter your Subscriptions!</h1>
                    <br></br>
                    <form style = {conatinerColor}>
                        <Row>
                            <h2 style = {whiteText}>{this.props.location.state}</h2>
                        </Row>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col size="xs-9 sm-12">
                            <Input
                                name="service"
                                value={this.state.service}
                                onChange={this.handleInputChange}
                                placeholder="Service"
                            />
                            </Col>
                        </Row>
                            <br></br>
                        <Row>
                            <Col size="xs-9 sm-12">
                            <Input
                                name="price"
                                value={this.state.price}
                                onChange={this.handleInputChange}
                                placeholder="Price"
                            />
                            </Col>
                        </Row>
                            <br></br>
                        <Row>
                            <Col size="xs-9 sm-12">
                            <Input
                                name="rate"
                                value={this.state.rate}
                                onChange={this.handleInputChange}
                                placeholder="Rate"
                            />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="xs-3 sm-6">
                                <Button style = {whiteText}
                                    onClick={this.handleFormSubmit}
                                    type="success"
                                    className="input-lg"
                                    >
                                    Submit
                                </Button>
                            </Col>
                            <Col size="xs-3 sm-1">
                                <Button>
                                <Link style = {whiteText} to = {{ pathname: '/Subscriptions', state: this.state.userName}}>Continue</Link>
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

export default FormTwo;