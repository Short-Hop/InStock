import React from "react";
import Nav from "../src/component/Nav";
import InvHeader from "../src/component/InvHeader";
// import LocHeader from "../src/component/LocHeader";
import "../src/styles/styles.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <InvHeader />
      </>
    );
  }
}

export default App;
