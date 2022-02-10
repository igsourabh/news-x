import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Fullcontent from "./components/Fullcontent";
import Footer from "./components/Footer";
const apikey=process.env.REACT_APP_API_KEY
function App() {
 

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
     
      <Route exact path="/" component={Main} apikey={apikey}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/details/:id" component={Fullcontent}/>
         
        
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
