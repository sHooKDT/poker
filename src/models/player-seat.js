import PropTypes from 'prop-types';
import CardPropTypes from './card';

const PlayerSeatPropTypes = {
  you: PropTypes.bool.isRequired,
  nickname: PropTypes.string.isRequired,
  chips: PropTypes.number,
  status: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
};

export default PlayerSeatPropTypes;
