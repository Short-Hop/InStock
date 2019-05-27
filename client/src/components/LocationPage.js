import React from "react";
import Header from "./Header";
import Location from "./Location";
import Nav from "./Nav"
// import CreateProduct from './CreateProduct';

class LocationPage extends React.Component {
  render() {
    return (
      <>
        <Nav page={this.props.match.path}/>
        <Header title="Location" />
        <Location />
      </>
    );
  }
}

export default LocationPage;
