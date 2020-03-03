import React, { Component } from 'react';

import '../stylesheets/Description.css';

export class Description extends Component {
  render() {

    const desc = this.props.descProps.description
                  .split('\n')
                  .map((text, i) => {
                    return <div key={ "descText" + i }>{ text }</div>;
                  });

    return (
      <div className="DescriptionWrapper">
        <div className="title">
          { this.props.descProps.title }
        </div>

        <div className="description">
          { desc }
        </div>
      </div>
    )
  }
}

export default Description;
