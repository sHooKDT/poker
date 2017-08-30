import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fitter from '../Fitter';
import Card from '../Card';
import CardPropTypes from '../../../models/card';

const CardsPlaceholder = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: 5px dashed hsla(0, 100%, 100%, 0.5);
  border-radius: 10px;
`;

const TableCard = styled(Card)`
  margin: 1% 1% 1% 0;
  width: 20%;
  &:nth-child(1) {
    margin: 1%;
  }
`;

function TableCards(props) {
  const cardsTemplate = props.data.map(card =>
    <TableCard className="sharedCard" suit={card.suit} rank={card.rank} />,
  );
  return (
    <Fitter flexcenter>
      <CardsPlaceholder>
        {cardsTemplate}
      </CardsPlaceholder>
    </Fitter>
  );
}

TableCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)).isRequired,
};

export default TableCards;
