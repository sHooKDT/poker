import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './table.css';
import PlayerSeat from './__seat/seat';
import TableCards from './__table-cards/table-cards';
import CardPropTypes from '../../models/card';
import PlayerSeatPropTypes from '../../models/player-seat';

function Table(props) {
  const { players, tableCards } = props;
  const playerSeatsTemplate = players.map(player => (
    <PlayerSeat data={player} />
  ));

  return (
    <div className="table-wrapper">
      <TableCards data={tableCards} />
      <div className="table-seats-wrapper">
        {playerSeatsTemplate}
      </div>
    </div>
  );
}

Table.propTypes = {
  tableCards: PropTypes.arrayOf(
    PropTypes.shape(CardPropTypes),
  ).isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape(PlayerSeatPropTypes),
  ).isRequired,
};

const mapStateToProps = state => ({
  tableCards: state.table.table_cards,
  players: state.table.players,
});

export default connect(mapStateToProps)(Table);
