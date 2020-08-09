import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import Users from './Users'
import { Navbar, Nav, } from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand><Link to="/home">RAMAN</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
         
          <Route path="/about" component={About} ></Route>
          <Route path="/users" component={Users} ></Route>
          <Route path="/" component={Home} ></Route>
          <Route path="/home" component={Home} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
