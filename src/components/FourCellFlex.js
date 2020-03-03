import React, { Component } from 'react';

import '../stylesheets/FourCellFlex.css';

import Description from './Description';

export class FourCellFlex extends Component {
  render() {

    const descProps = {
      title: "Four Cell Flex",
      description:  "For `width > 720 px`, produce 1x4 grid (1 row, 4 cols) \n" 
                  + "For `360 px < width <= 720 px`, produce 2x2 grid \n"
                  + "For `width <= 360 px`, produce 4x1 grid (4 rows, 1 col)"
    };

    return (
      <div className="FourCellFlex">

        <Description descProps={ descProps } />

        <div className="container">
          <div className="cell">
            <div>1</div>
            <div>Method: used media queries to specify `flex: 1 0 24%`</div>
          </div>
          <div className="cell">
            <div>2</div>
            <div>Shorthand for `flex-grow, flex-shrink, flex-basis`</div>
          </div>
          <div className="cell">
            <div>3</div>
            <div> 
              Flex-grow does not take into account `padding`.
              Workaround is to set the margin for the child wrapper
            </div>
          </div>
          <div className="cell">
            <div>4</div>
          </div>
        </div>
      </div>
    )
  }
}

export default FourCellFlex;
