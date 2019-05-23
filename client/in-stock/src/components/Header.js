import React, { Component } from "react";

export default class InvHeader extends Component {
  render() {
    return (
      <header className="header">
        <h1>{this.props.title}</h1>
        <input className="header__search" placeholder="Search" />
      </header>
    );
  }
}
