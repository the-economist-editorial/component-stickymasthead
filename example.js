import StickyMastHead from './index';
import React from 'react';
import ShareBar from './../component-sharebar';

export default (
  <StickyMastHead>
    <h1 className="wif-title sticky-hidden">The World</h1>
    <ShareBar customClass="sticky-show"></ShareBar>
    <div className="wif-button">
      <a href="/theWorldIf">
        <svg className="home sticky-show" viewBox="0 0 30 30">
          <path display="inline" fill="#FFFFFF" d="M22.9,15.5h-2v7.6h-5.4v-4.7h-3v4.7H7.1v-7.6h-2l3.4-3.8V6.7h2.5v2l3-3.5l4.5,5.1L22.9,15.5z"></path>
        </svg>
        <svg className="if sticky-hidden" viewBox="0 0 70 70"><path fill="#2DBDEB" d="M0 0h70v70H0z"/><g fill="#FFF"><path d="M15.5 16.4h4.6v37.9h-4.6V16.4zm5.6 37.9V16.4h4.6v37.9h-4.6zM30.5 16.4h25.8v3.8H35.1v34.1h-4.6V16.4zm23.9 20H36.1V21.2h20.2v3.7H40.7v7.7h13.8v3.8zM36.1 54.3V37.4h18.4v3.7H40.7v13.2h-4.6z"/></g></svg>
      </a>
    </div>
  </StickyMastHead>
);