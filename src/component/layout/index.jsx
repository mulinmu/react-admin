import React, { Component } from 'react';

import TopNav from 'component/nav-top/index.jsx';
import SideNav from 'component/nav-side/index.jsx';
import './theme.css'
import './index.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div id="wrapper">
        <TopNav />
        <SideNav />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;