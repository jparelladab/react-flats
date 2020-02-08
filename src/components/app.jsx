import React, { Component } from 'react';
import FlatList from './flat-list';
import MapContainer from './map-container';

console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

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
