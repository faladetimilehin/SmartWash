import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Register from './components/Register';
import Footer from './components/Footer';
import Services from './components/Services';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/Home' component={Home}/>
        <Route path='/About' component={About}/>
        <Route exact path='/Services' component={Services}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Register' component={Register}/>
      </div>
      <Footer/>
      </BrowserRouter>
     
    );
  }
  
  }
 
export default App;
