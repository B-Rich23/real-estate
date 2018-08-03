import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route, Switch, Link,
  } from 'react-router-dom';
import Home from '../components/Home';


export default () => (
    <Router>
        <Route path="/" component={Home} />
    </Router>
);