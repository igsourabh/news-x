import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Fullcontent from "./components/Fullcontent";
import Footer from "./components/Footer";
function App() {
  let apiKEY = process.env.API_KEY

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
     
      <Route exact path="/" component={Main}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/details/:id" component={Fullcontent}/>
         
        
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
