import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Description from './Description';

import '../stylesheets/FourCellGrid.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class FourCellGrid extends Component {
  render() {

    const descProps = {
      title: "Four Cell Grid",
      description:  "Use Bootstrap Grids to produce responsive layout \n"
                  + "Similar to Four Cell Flex"
    };

    return (
      <div className="FourCellGrid">
        
        <Description descProps={ descProps } />

        <Container>
          <Row>
            <Col xs={6} md={3}>
              <div className="cell">
                <div>
                  Bootstrap Grid Settings
                </div>
                <div>
                  xs=6, md=3
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="cell">
                <div>
                  xs=6, md=3
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="cell">
                <div>
                  xs=6, md=3
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="cell">
                <div>
                  xs=6, md=3
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default FourCellGrid;
