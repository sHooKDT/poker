import React from 'react';
import CardPropTypes from '../../../models/card';

const Card = (props) => {
  let url;
  if (props.suit && props.rank) {
    url = `${process.env.PUBLIC_URL}/cards-svg/${props.rank}${props.suit}.svg`;
  } else url = `${process.env.PUBLIC_URL}/cards-svg/backside.svg`;
  return <img className={`card ${props.className}`} src={url} alt="Card" />;
};

Card.propTypes = CardPropTypes;

export default Card;
