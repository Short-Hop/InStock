import React from "react";
import Header from "./Header";
import Location from "./Location";
import Nav from "./Nav";
import CreateWarehouse from "./CreateWarehouse";

class LocationPage extends React.Component {
  render() {    
    return (
      <>
        <Nav page={this.props.match.path} />
        <Header title="Location" />
        <Location warehouseArray={this.props.warehouseArray} />
        <CreateWarehouse />
      </>
    );
  }
}

export default LocationPage;
