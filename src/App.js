import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import './App.css';
import Dashboard from './components/Dashboard';
import AllProjects from './components/AllProjects';
import AllTeams from './components/AllTeams';
import MyTasks from './components/MyTasks';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/allprojects' component={AllProjects} />
        <Route path='/allteams' component={AllTeams} />
        <Route path='/mytasks' component={MyTasks} />
      </Switch>
    </Router>
  );
}

export default App;
