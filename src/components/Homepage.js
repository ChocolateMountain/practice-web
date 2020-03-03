import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Homepage.css';

export class Homepage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="linkWrapper">
          <Link to="/FourCellFlex">Four Cell Flex</Link>
        </div>
        <div className="linkWrapper">
          <Link to="/FourCellGrid">Four Cell Grid</Link>
        </div>
      </div>
    )
  }
}

export default Homepage;
