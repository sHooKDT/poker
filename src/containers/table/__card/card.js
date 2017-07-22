import React from 'react';
import CardPropTypes, { createCard } from '../../../models/card';

const Card = (props) => {
  let url;
  if (props.show) url = `${process.env.PUBLIC_URL}/cards-svg/${props.data.quality}${props.data.suit}.svg`;
  else url = `${process.env.PUBLIC_URL}/cards-svg/backside.svg`;
  return (
    <img
      className={`card ${props.className}`}
      src={url}
      alt="Card"
    />
  );
};

Card.defaultProps = createCard();
Card.propTypes = CardPropTypes;

export default Card;
