import React from 'react';
import MastHead from '@economist/component-masthead';
import Sticky from 'react-sticky';

export default class StickyMastHead extends React.Component {

  get propTypes() {
    return {
      topOffset: React.PropTypes.number,
      children: React.PropTypes.node,
    };
  }

  static get defaultProps() {
    return {
      topOffset: 80,
    };
  }

  render() {
    const smallLogo = { 'type': 'logoEconomistSmall' };
    return (
      <Sticky topOffset={this.props.topOffset}>
        <MastHead logo={smallLogo}>
          {this.props.children}
        </MastHead>
      </Sticky>
    );
  }
}
