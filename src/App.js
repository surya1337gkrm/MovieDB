import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";
import {HashRouter as Router,Route} from "react-router-dom";
import Landing from "./components/home/landing";
import Movie from './components/home/movie';
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Landing}/>
          <Route path="/movie/:id" exact component={Movie}/>
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
};

export default App;
