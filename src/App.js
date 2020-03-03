import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage';
import FourCellFlex from './components/FourCellFlex';
import FourCellGrid from './components/FourCellGrid';

function App() {

  const app = (
    <div className="App">

      <Route exact path="/" render={(routeProps) => <Homepage {...routeProps} />} />
      <Route exact path="/FourCellFlex" render={(routeProps) => <FourCellFlex {...routeProps} />} />
      <Route exact path="/FourCellGrid" render={(routeProps) => <FourCellGrid {...routeProps} />} />

    </div>
  );

  return <Router>{ app }</Router>;
}

export default App;
