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
        <Flat />
        <Flat />
        <Flat />
        <Flat />
        <Flat />
        <Flat />
        <Flat />
        <Flat />
        <Flat />
        <Flat />
      </div>
    );
  }
}


export default FlatList;
