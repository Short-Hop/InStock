import React, { Component } from "react";

export default class nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div class="nav__logo">
          <a href="../html/bandsite.html">
            <img src="../assets/Logo/Logo-instock.svg" />
          </a>
        </div>
        <div class="nav__menu">
          <div className="nav__menu--inventory">
            <a href="/html/bandsite.html">Inventory</a>
          </div>
          <div class="nav__menu--location">
            <a href="/html/show.html">Location</a>
          </div>
        </div>
      </nav>
    );
  }
}
