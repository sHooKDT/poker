import React, {Component} from 'react';
import './table.css';
import PlayerSeat from './__seat/seat';

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
            <div className="table-background">
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
