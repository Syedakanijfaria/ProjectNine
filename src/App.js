import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About.js';
import Courses from './Component/Courses/Courses.js';
import Footer from './Component/Footer/Footer.js';
import Header from './Component/Header/Header.js';
import Home from './Component/Home/Home.js';
import NotFound from './Component/NotFound/NotFound.js';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
