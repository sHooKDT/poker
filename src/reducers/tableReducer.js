const initialState = {
  seats_count: 6,
  pot: 100,
  actions_available: {
    fold: false,
    check: true,
    raise: false,
    call: true,
  },
  restrictions: {
    min: 4000,
    max: 4200,
    step: 1,
  },
  table_cards: [
    {
      suit: 's',
      rank: 'T',
    },
  ],
  players: [
    {
      you: true,
      seat: 1,
      nickname: 'vovan',
      chips: 900,
      bet: 100,
      dealer: false, // true
      status: 'active', // fold, all-in, active, call, check, raise, bet
      cards: [
        {
          suit: 'c',
          rank: 'K',
        },
        {
          suit: 'd',
          rank: '8',
        },
      ],
    },
  ],
};

export default function (state = initialState) {
  return state;
}
