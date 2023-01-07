import React from 'react';
import Navbar from './component/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Profile from './component/Profile';
import Quiz from './component/Quiz';
import './App.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Quiz} />
        <Route exact path="/student" component={Home} />
        {/* <Route exact path="/home" component={Home} />
       
        <Route exact path="/profile" component={Profile} /> */}

      </Switch>


    </>
  )
}

export default App;



