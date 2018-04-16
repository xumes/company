import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/portfolio' component={Portfolio} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
