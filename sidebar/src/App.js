import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Classes from './pages/Classes';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms' component={Rooms} />
          <Route path='/classes' component={Classes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
