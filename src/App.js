import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Fullcontent from "./components/Fullcontent";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/details/:id">
            <Fullcontent />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
