import React from 'react';
import { BrowswerRouter as Router, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

function App() {
return (
  <Router>
    <div className ="app">
        <Route exact Path ="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={UserProfile} />
    </div>
  </Router>
);
}