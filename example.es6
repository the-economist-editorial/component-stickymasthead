import StickyMastHead from './index.es6';
import React from 'react';
import Icon from '@economist/component-icon';

export default (
  <StickyMastHead>
    <h1 className="wif-title sticky-hidden">The World</h1>
    <div className="wif-button">
      <a href="/theWorldIf">
        <Icon
          icon="home"
          className="home StickyMasthead--visible"
          background="none"
          size="100%"
        />
        <Icon
          icon="logoWorldIF"
          className="if StickyMasthead--hidden"
          size="100%"
        />
      </a>
    </div>
  </StickyMastHead>
);
