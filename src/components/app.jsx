import React, { Component } from 'react';
import FlatList from './flat-list';
import MapContainer from './map-container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFlat: null
    };
  }

  selectFlat = (e) => {
    this.setState({ activeFlat: e.target.id });
  }


  render() {
    return (
      <div>
        <FlatList clickFunction={this.selectFlat} appState={ this.state.activeFlat} />
        <MapContainer />
      </div>
    );
  }
}


export default App;
