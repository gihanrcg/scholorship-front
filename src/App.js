import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import HomePage from './pages/homepage/HomePage';
import Footer from './components/footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/loginpage/Login';
import SignUp from './pages/signup/SignUp';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={SignUp} />
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
