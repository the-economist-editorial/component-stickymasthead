import React from 'react';
import MastHead from './../component-masthead';
import Sticky from 'react-sticky';

export default class StickyMastHead extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const smallLogo = { 'type': 'logoEconomistSmall' };
    return (
      <Sticky topOffset={80}>
        <MastHead logo={smallLogo}>
          {this.props.children}
        </MastHead>
      </Sticky>
    );
  }
}
