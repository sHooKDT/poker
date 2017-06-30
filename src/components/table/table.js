import React, {Component} from 'react';
import './table.css';
import PlayerSeat from './__seat/seat';

class Table extends Component {
    render() {
        return (
          <div className="table-wrapper">
            <PlayerSeat/>
            {/* <PlayerSeat/>
            <PlayerSeat/> */}
          </div>
        )
    }
}

export default Table;
