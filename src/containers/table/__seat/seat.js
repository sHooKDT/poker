import React from 'react';
import PlayerSeatPropTypes from '../../../models/player-seat';
import Card from '../__card/card';
import './seat.css';


function PlayerSeat(props) {
  return (
    <div className="table-seat pl-seat-wrapper">
      <div className="pl-seat-cards">
        <Card className="pl-seat-card" show data={props.data.hand.first} />
        <Card className="pl-seat-card" show data={props.data.hand.second} />
      </div>
      <div className="pl-seat-panel">
        <h1 className="pl-seat-nickname">{props.data.nickname}</h1>
        <hr className="pl-seat-splitter" />
        <h2 className="pl-seat-bank">{props.data.pot}$</h2>
      </div>
    </div>
  );
}

PlayerSeat.propTypes = PlayerSeatPropTypes;

export default PlayerSeat;
