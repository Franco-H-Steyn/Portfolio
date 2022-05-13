import { DataThresholdingSharp } from '@mui/icons-material';
import React, { Component } from 'react';

export default class WireframeItem extends Component {
  render() {
    return (
      <div className='wireframeItem'>
          <h3>{this.props.title}</h3>
          <div style = {{backgroundImage: `url(${this.props.image})`}}></div>
      </div>
    )
  }
}