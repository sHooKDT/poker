import PropTypes from 'prop-types';
import CardPropTypes from './card';

const PlayerSeatPropTypes = {
  nickname: PropTypes.string.isRequired,
  pot: PropTypes.number,
  status: PropTypes.string.isRequired,
  hand: PropTypes.shape({
    first: PropTypes.shape(CardPropTypes),
    second: PropTypes.shape(CardPropTypes),
  }),
};

export default PlayerSeatPropTypes;