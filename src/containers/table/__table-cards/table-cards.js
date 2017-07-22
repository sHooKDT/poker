import React from 'react';
import PropTypes from 'prop-types';
import './table-cards.css';
import Card from '../__card/card';
import CardPropTypes from '../../../models/card';


function TableCards(props) {
  const cardsTemplate = props.data.map(card => (
    <Card className="sharedCard" show data={card} />
  ));
  return (
    <div className="sharedWrapper">
      {cardsTemplate}
    </div>
  );
}

TableCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(CardPropTypes),
  ).isRequired,
};

export default TableCards;
