import React from 'react';
import logo from './logo.svg';
import './styles/styles.css';
import Inventory from "./components/Inventory"

class App extends React.Component {

  render() {
    return (
      <div>
        <Inventory></Inventory>
      </div>
    );
  }
  
}

export default App;
