import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
              <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">React-News</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link js-scroll-trigger" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link js-scroll-trigger" to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link js-scroll-trigger" to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                  <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                </div>
              </div>
              <div className="col-lg-5 my-auto">
                <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                      <div className="screen">
                        {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                        {/* <img src="img/demo-screen-1.jpg" className="img-fluid" alt /> */}
                      </div>
                      <div className="button">
                        {/* You can hook the "home button" to some JavaScript events or just remove it */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
        );
    }
}

export default Navbar;