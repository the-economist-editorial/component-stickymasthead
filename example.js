import StickyMastHead from './index';
import React from 'react';
import ShareBar from './../component-sharebar';
import Icon from './../component-icon';

export default (
  <StickyMastHead>
    <h1 className="wif-title sticky-hidden">The World</h1>
    <ShareBar customClass="sticky-show"></ShareBar>
    <div className="wif-button">
      <a href="/theWorldIf">
        <Icon type='home' className="home sticky-show" background="none"/>
        <Icon type='logoWorldIF' className="if sticky-hidden"/>
      </a>
    </div>
  </StickyMastHead>
);