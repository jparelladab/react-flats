import React, { Component } from 'react';
import flats from '../../data/flats';


const importFlatObject = (id) => {
  return flats.find(el => el.id === parseInt(id, 10));
};


class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${importFlatObject(this.props.id).imageUrl})` }}>
        <div className="card-category">{ importFlatObject(this.props.id).price + " " + importFlatObject(this.props.id).priceCurrency }</div>
        <div className="card-description">
          <h2>{ importFlatObject(this.props.id).name }</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}


export default Flat;
