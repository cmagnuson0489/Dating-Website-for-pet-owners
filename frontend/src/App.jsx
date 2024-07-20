import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import UserList from './components/UserProfile';
import Chat from './components/Chat';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
            <Route path="/login" component={login} />
            <Route path="/users" component={UserList} />
            <Route path ="/profile" component={UserProfile} />
            <Route path="/chat" component={Chat} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;