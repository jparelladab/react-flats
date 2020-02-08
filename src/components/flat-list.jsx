import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flat-list">
        <Flat id="1" />
        <Flat id="2" />
        <Flat id="3" />
        <Flat id="4" />
        <Flat id="5" />
        <Flat id="6" />
      </div>
    );
  }
}


export default FlatList;
