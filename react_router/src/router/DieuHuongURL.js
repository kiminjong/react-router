import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from '../component/Home';
import Blog from '../component/Blog';
import BlogDetail from '../component/BlogDetail';
import Contact from '../component/Contact';

class DieuHuongURL extends Component {
    render() {
        return (
           
            <div>
                <Route exact path="/home" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/blog-detail/:slug.:id.html" component={BlogDetail} />
                <Route path="/contact" component={Contact} />
            </div>
            
        );
    }
}

export default DieuHuongURL;