import React, { Component } from 'react';
import './seat.css';
// import card_example from './ace_of_spades.png';
import card_example from './QC.svg';

class PlayerSeat extends Component {
  render() {
    return (
      <div className="pl-seat-wrapper">
        <div className="pl-seat-cards">
          <img className="pl-seat-card pl-seat-card-left" src={card_example} alt="Left card" />
          <img className="pl-seat-card pl-seat-card-right" src={card_example} alt="Right card" />
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
