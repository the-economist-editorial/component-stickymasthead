import React from 'react';
import MastHead from '@economist/component-masthead';
import Sticky from 'react-sticky';

export default class StickyMastHead extends React.Component {

  get propTypes() {
    return {
      className: React.PropTypes.string,
      topOffset: React.PropTypes.number,
      children: React.PropTypes.node,
    };
  }

  static get defaultProps() {
    return {
      topOffset: 67,
    };
  }

  render() {
    return (
      <Sticky
        className={`StickyMasthead ${this.props.className}`}
        topOffset={this.props.topOffset}
        type={(attributes, children) => {
          return (
            <div {...attributes}>
              {children}
            </div>
          );
        }}
      >
        <MastHead>
          {this.props.children}
        </MastHead>
      </Sticky>
    );
  }

}
