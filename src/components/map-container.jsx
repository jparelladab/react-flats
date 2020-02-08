import React, { Component } from 'react';
import SimpleMap from './simple-map';


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="map-container">
        <SimpleMap />
      </div>
    );
  }
}


export default MapContainer;
