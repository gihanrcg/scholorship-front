import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import HomePage from './pages/homepage/HomePage';
import Footer from './components/footer/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <HomePage />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
