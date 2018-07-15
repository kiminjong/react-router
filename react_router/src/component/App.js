import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './../css/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar/>
        <DieuHuongURL/>
        <Footer/>
          
        </div>
      </Router>
    );
  }
}

export default App;
