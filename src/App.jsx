import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch, Route} from "react-router-dom";
import Home from '../src/components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




const App = () => {
  return (
    <> 
      <Navbar/>

      <Switch> 
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
      </Switch>

      <Footer/>

    </>
    
    
  )
}

export default App;
