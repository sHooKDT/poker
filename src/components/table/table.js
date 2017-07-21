import React, {Component} from 'react';
import './table.css';
import PlayerSeat from './__seat/seat';
import TableCards from './__table-cards/table-cards';

const example = {
  nickname: 'shook',
  bank: '3459',
  hand: {
    first: {
      type: 'Q',
      suit: 'C'
    },
    second: {
      type: '10',
      suit: 'D'
    }
  }
}

class Table extends Component {
    render() {
        return (
          <div className="table-wrapper">
              <TableCards />
              <div className="table-seats-wrapper">
              <PlayerSeat info={example} />
              <PlayerSeat info={example} />
              <PlayerSeat info={example} />
              <PlayerSeat info={example} />
              <PlayerSeat info={example} />
              <PlayerSeat info={example} />
              </div>
          </div>
        )
    }
}

export default Table;
