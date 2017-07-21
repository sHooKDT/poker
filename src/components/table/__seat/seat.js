import React, { Component } from 'react';
import './seat.css';

const Card = (props) => (
  <img className="pl-seat-card"
    src={`${process.env.PUBLIC_URL}/cards-svg/${props.data.type}${props.data.suit}.svg`}
    alt="Pocket card" />
)

class PlayerSeat extends Component {
  render() {
    return (
      <div className="table-seat pl-seat-wrapper">
        <div className="pl-seat-cards">
          <Card data={this.props.info.hand.first} />
          <Card data={this.props.info.hand.second} />
        </div>
        <div className="pl-seat-panel">
          <h1 className="pl-seat-nickname">{this.props.info.nickname}</h1>
          <hr className="pl-seat-splitter"/>
          <h2 className="pl-seat-bank">{this.props.info.bank}$</h2>
        </div>
      </div>
    );
  }
}

export default PlayerSeat;
