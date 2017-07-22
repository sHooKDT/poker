const initialState = {
  type: 'holdem',
  seats_count: 6,
  table_cards: [
    {
      suit: 'S',
      quality: 'Q',
    },
  ],
  players: [
    {
      nickname: 'shook',
      pot: 1000,
      status: 'in-game',
      hand: {
        first: {
          suit: 'C',
          quality: 'K',
        },
        second: {
          suit: 'D',
          quality: '8',
        },
      },
    },
  ],
};

export default function (state = initialState) {
  return state;
}
