import React, { Component } from "react";

export default class LocHeader extends Component {
  render() {
    return (
      <header className="header">
        <h1>Location</h1>
        <input className="header__search" placeholder="Search" />
      </header>
    );
  }
}
