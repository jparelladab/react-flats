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
        <Flat id="1" appState={this.props.appState} clickFunction={ this.props.clickFunction } />
        <Flat id="2" appState={this.props.appState} clickFunction={ this.props.clickFunction } />
        <Flat id="3" appState={this.props.appState} clickFunction={ this.props.clickFunction } />
        <Flat id="4" appState={this.props.appState} clickFunction={ this.props.clickFunction } />
        <Flat id="5" appState={this.props.appState} clickFunction={ this.props.clickFunction } />
        <Flat id="6" appState={this.props.appState} clickFunction={ this.props.clickFunction } />
      </div>
    );
  }
}


export default FlatList;
