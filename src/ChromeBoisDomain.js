import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  
  toggleCycle = () => {
    toggleCycling()
  }
 
  handleResize = (event) => {
    resize( (event.key === 'a') ? '+' : '-' ) 
  }
  
  
  render() {
    return (
      <canvas 
        onClick={this.toggleCycle}
        onKeyDown={this.handleResize}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
