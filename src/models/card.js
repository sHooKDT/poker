import PropTypes from 'prop-types'

const CardPropTypes = {
  show: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    suit: PropTypes.string,
    quality: PropTypes.string,
  }),
};

function createCard(show = false, suit = '', quality = '') {
  if (show) {
    return {
      suit,
      quality,
    };
  }

  return {};
}

export { createCard }
export default CardPropTypes
