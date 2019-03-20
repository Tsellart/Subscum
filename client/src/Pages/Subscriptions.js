import React, { Component } from 'react';
import {Navbar, NavItem, Footer, Table} from 'react-materialize';
import Jumbotron from '../components/Jumbotron/index';
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid/index";
import Button from "../components/Button/index";
import DeleteBtn from "../components/deleteBtn/DeleteBtn"
import Axios from 'axios';
import AccountItem from "../components/Login2/accountitem"

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

const whiteText = {
  color: "white",
  backgroundColor: "E9AE0B"
};


class Subscriptions extends Component {
      state = {
      Items: [],
      id: '',
      userName: this.props.location.state,
      service: '',
      price: '',
      rate: ''
    }
  
  componentDidMount() {
    this.loadItems();
    this.resetPage();
  }

  loadItems = () => {
    API.getSubs()
    .then(json => console.log(json.data))
      .catch(err => console.log(err));
      console.log(this);
  }
  
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  resetPage = () => {
    Axios({
      url: '/api/items/?userName=' + this.props.location.state,
      method: 'get',
      data: {
        _id: '',
        service: '',
        price: '',
        rate: ''
      }
    })
    .then(res => this.setState({ Items: res.data, _id: '',  service: '', price: '', rate: ''})
    )
    .catch(err => console.log(err));
    console.log(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    Axios({
      url: '/api/items/?userName=' + this.props.location.state,
      method: 'get',
      data: {
        _id: '',
        service: '',
        price: '',
        rate: ''
      }
    })
    .then(res => this.setState({ Items: res.data, _id: '', service: '', price: '', rate: ''})
    )
    .catch(err => console.log(err));
    console.log(this.state.Items);
  };

  deleteSub = id => {
    API.deleteSubs(id)
    .then(res => this.resetPage())
    .catch(err => console.log(err));
  };

  

  render() {
    return (
      <div className="App">
      <Navbar style = {navColor} brand='S.O.S' right>
      <NavItem>
        <Link to = {{pathname: '/Form2', state: this.state.userName}}>Manage Subscriptions</Link>
      </NavItem>
      <NavItem>
        <Link to = {'/home'}>Log-Out</Link>
      </NavItem>
      </Navbar>
      <Jumbotron>
        <Container >
          <Row>
            <Col size="xs-12 sm-12">
              <h2 style = {whiteText}>Hi, {this.props.location.state}</h2>
            </Col>
          </Row>
          <Row>
          </Row>
          <Row>
          </Row>
          <br></br>
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
          {this.state.Items.length ? (
            <tbody>
              {this.state.Items.map(Items => {
                return (
                  <tr>
                    <td key = {Items._id}>{Items.service}</td>
                    <td>{Items.price}</td>
                    <td>{Items.rate}</td>
                    <td><DeleteBtn onClick={() => this.deleteSub(Items._id)} /></td>
                  </tr>
                );
              })}
            </tbody>
          ): (<h3>no results to display</h3>)}
        </Table>
        <br></br>
        <br></br>
        <h1 style = {whiteText}>Total Cost: </h1>
        <h2 style = {whiteText}>
        {this.state.Items.reduce((totalItems, service) => totalItems + parseFloat(service.price,10),0)}
        </h2>



        
      </Jumbotron>
      <Footer style = {footerStyle}></Footer>
      </div>
    );
  }
}

export default Subscriptions;
