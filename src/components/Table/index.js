import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import SeatsLayout from './SeatsLayout';
import AdaptiveSeat from './PlayerSeat/AdaptiveSeat';
import TableCards from './TableCards';
import TablePot from './TablePot';
import ActionsGroup from './ActionsGroup';
import CardPropTypes from '../../models/card';
import PlayerSeatPropTypes from '../../models/player-seat';
import allocatePlayers from './allocatePlayers';

const theme = {
  sizing: {
    table: {
      width: '80vw',
      height: '40vw',
    },
    seat: {
      width: '15%',
    },
  },
};

const TableWrapper = styled.div`
  width: ${props => props.theme.sizing.table.width};
  height: ${props => props.theme.sizing.table.height};
  position: absolute;
  top: 5%;
  left: 5%;
  background: #388e3c;
  border-radius: 999px;
  border: 3px solid #455a64;
  box-shadow: 0px 0px 100px 0px rgba(0, 0, 0, 0.75);
  font-size: 1vw;
  // Apply to element and all children
  &,
  & * {
    box-sizing: border-box;
  }
`;

const MountedActionsGroup = styled(ActionsGroup)`
  position: absolute;
  right: 0;
  bottom: -50%;
`;

function Table(props) {
  const { seatsCount, availableActions, players, pot, restrictions, tableCards } = props;

  return (
    <ThemeProvider theme={theme}>
      <TableWrapper>
        <TableCards data={tableCards} />
        <TablePot size={pot} />
        <SeatsLayout count={seatsCount}>
          {allocatePlayers(players, AdaptiveSeat)}
        </SeatsLayout>
        <MountedActionsGroup available={availableActions} restrictions={restrictions} />
      </TableWrapper>
    </ThemeProvider>
  );
}

Table.propTypes = {
  seatsCount: PropTypes.number.isRequired,
  availableActions: PropTypes.objectOf(PropTypes.bool).isRequired,
  restrictions: PropTypes.objectOf(PropTypes.number).isRequired,
  tableCards: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)).isRequired,
  players: PropTypes.arrayOf(PropTypes.shape(PlayerSeatPropTypes)).isRequired,
  pot: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  seatsCount: state.table.seats_count,
  availableActions: state.table.actions_available,
  restrictions: state.table.restrictions,
  tableCards: state.table.table_cards,
  players: state.table.players,
  pot: state.table.pot,
});

export default connect(mapStateToProps)(Table);
