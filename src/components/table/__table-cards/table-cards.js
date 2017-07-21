import React from 'react';
import './table-cards.css';

const Card = (props) => (
  <img className="table-shared-card"
    src={`${process.env.PUBLIC_URL}/cards-svg/${props.data.type}${props.data.suit}.svg`}
    alt="Table card" />
)

const example = {
  type: 'J',
  suit: 'C'
}

class TableCards extends React.Component {
  render() {
    return (
      <div className="table-shared-wrapper">
        <Card data={example} />
        <Card data={example} />
        <Card data={example} />
        <Card data={example} />
        <Card data={example} />
      </div>
    )
  }
}

export default TableCards;
