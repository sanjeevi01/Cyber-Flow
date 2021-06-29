import React from 'react';
import NavBar from './components/Header';
import WelcomeImg from './components/WelcomeImg';
import Welcome from './components/Welcome';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import OurWork from './components/Our-Work';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

    <Router>
        <NavBar/>
        <WelcomeImg/>
        <Welcome/>
        <OurWork/>
        <Testimonial/>
        <Footer/>
        
        <Switch>
          <Route path='/' exact></Route>
        </Switch>
    </Router>

  );
}

export default App;
