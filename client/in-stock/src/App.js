import React from "react";
import Nav from "../src/component/Nav";
import InvHeader from "../src/component/InvHeader";
import LocHeader from "../src/component/LocHeader";
import "./App.css";
import "./styles/styles.css";
import CreateProduct from "./CreateProduct";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Inventory from "./components/Inventory"


=======
import Location from "./components/Location";

>>>>>>> Stashed changes
=======
import Location from "./components/Location";

>>>>>>> Stashed changes
class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <InvHeader />
        <LocHeader />
        <CreateProduct />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <Inventory/>
=======
        <Location />
>>>>>>> Stashed changes
=======
        <Location />
>>>>>>> Stashed changes
      </>
    );
  }
}

export default App;
