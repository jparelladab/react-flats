import React, { Component } from 'react';
import FlatList from './flat-list';
import MapContainer from './map-container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlatId: 1
    };
  }

  clickFlat = () => {}

  render() {
    return (
      <div>
        <FlatList />
        <MapContainer />
      </div>
    );
  }
}


export default App;
