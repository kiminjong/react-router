import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
        <section className="contact bg-primary" id="contact">
          <div className="container">
            <h2>We
              <i className="fa fa-heart" />
              new friends!</h2>
            <ul className="list-inline list-social">
              <li className="list-inline-item social-twitter">
                <a href="">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item social-facebook">
                <a href="">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item social-google-plus">
                <a href="">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <footer>
          <div className="container">
            <p>© Your Website 2018. All Rights Reserved.</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
        );
    }
}

export default Footer;