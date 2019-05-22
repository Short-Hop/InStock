import React from "react";
import Nav from "./components/Nav";
import InvHeader from "./components/InvHeader";
import LocHeader from "./components/LocHeader";
import "./App.css";
import "./styles/styles.css";
import CreateProduct from "./components/CreateProduct";
import Inventory from "./components/Inventory";

class App extends React.Component {
  state = {
    showPopup: false
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <>
        <Nav />
        <InvHeader />
        <Inventory />
        <LocHeader />
        <CreateProduct />
      </>
    );
  }
}

export default App;
