import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar'
import SelectionContainer from './character_creation/selection_container'
import CombatContainer from './combat_page/combat_container'
import Welcome from './WelcomePage'

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/character_select" component={SelectionContainer} />
      <Route exact path="/combat" component={CombatContainer} />
    </div>
  </Router>),
  document.getElementById('root')
); 
