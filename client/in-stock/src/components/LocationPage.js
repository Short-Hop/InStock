import React from 'react';
import Nav from "./Nav"
import Header from "./Header";
import Location from "./Location";
// import CreateProduct from './CreateProduct';

class LocationPage extends React.Component {
    render() {
        return(
            <>
            <Header title="Location"/>
            <Location/>
            </>
        )

    }
}

export default LocationPage;