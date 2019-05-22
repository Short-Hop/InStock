
import React from "react";
import Nav from "../src/component/Nav";
import InvHeader from "../src/component/InvHeader";
import LocHeader from "../src/component/LocHeader";
import "./App.css";
import "./styles/styles.css";
import CreateProduct from "./components/CreateProduct";


class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <InvHeader />
        <LocHeader />
        <CreateProduct />
      </>
    );
  }
}

export default App;
