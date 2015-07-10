import StickyMastHead from './index';
import React from 'react';
import ShareBar from '@economist/component-sharebar';
import Icon from '@economist/component-icon';
import MoreMenu from '@economist/component-moremenu';

export default (
  <StickyMastHead>
    <MoreMenu />
    <h1 className="wif-title sticky-hidden">The World</h1>
    <ShareBar customClass="sticky-show"/>
    <div className="wif-button">
      <a href="/theWorldIf">
        <Icon type="home" className="home sticky-show" background="none"/>
        <Icon type="logoWorldIF" className="if sticky-hidden"/>
      </a>
    </div>
  </StickyMastHead>
);
