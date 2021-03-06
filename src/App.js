import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About.js';
import Courses from './Component/Courses/Courses.js';
import Footer from './Component/Footer/Footer.js';
import Header from './Component/Header/Header.js';
import Home from './Component/Home/Home.js';
import NotFound from './Component/NotFound/NotFound.js';
import Teacher from './Component/Teachers/Teacher.js';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/teacher">
            <Teacher></Teacher>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
