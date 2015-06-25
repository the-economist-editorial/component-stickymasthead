import React from 'react';
import MastHead from './../component-masthead';
import Sticky from 'react-sticky';

export default class StickyMastHead extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sticky topOffset={80}>
        <MastHead>
          {this.props.children}
        </MastHead>
      </Sticky>
    );
  }
}