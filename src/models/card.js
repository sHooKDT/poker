import PropTypes from 'prop-types';

const CardPropTypes = {
  show: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    suit: PropTypes.string,
    rank: PropTypes.string,
  }),
};

export default CardPropTypes;

export function createCard(show = false, suit = '', rank = '') {
  if (show) {
    return {
      suit,
      rank,
    };
  }

  return {};
}
