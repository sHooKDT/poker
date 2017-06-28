import React, { Component } from 'react';
import './PlayerSeat.css';

class PlayerSeat extends Component {
  render() {
    return (
      <div className="pl-seat-wrapper">
        <div className="pl-seat-cards">
          <img className="pl-seat-card pl-seat-card-left" alt="Left card" />
          <img className="pl-seat-card pl-seat-card-right" alt="Right card" />
        </div>
        <div className="pl-seat-panel">
          <h1 className="pl-seat-nickname">sHooK</h1>
          <hr className="pl-seat-splitter"/>
          <h2 className="pl-seat-bank">1783$</h2>
        </div>
      </div>
    );
  }
}

export default PlayerSeat;
