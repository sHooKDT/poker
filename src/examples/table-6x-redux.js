export default {
  seats_count: 6,
  pot: 650,
  actions_available: {
    fold: true,
    check: true,
    raise: true,
    call: true,
  },
  restrictions: {
    min: 100,
    max: 3000,
    step: 1,
  },
  table_cards: [
    {
      suit: 's',
      rank: 'A',
    },
    {
      suit: 's',
      rank: 'A',
    },
    {
      suit: 's',
      rank: 'A',
    },
  ],
  players: [
    {
      you: true,
      seat: 1,
      nickname: 'shook',
      chips: 360,
      bet: 0,
      dealer: true, // true
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
    {
      you: false,
      seat: 2,
      nickname: 'vovan',
      chips: 360,
      bet: 0,
      dealer: true, // true
      status: 'fold', // fold, all-in, active, call, check, raise, bet
    },
    {
      you: false,
      seat: 3,
      nickname: 'sergey',
      chips: 360,
      bet: 0,
      dealer: true, // true
      status: 'raise', // fold, all-in, active, call, check, raise, bet
    },
    {
      you: false,
      seat: 3,
      nickname: 'sergey',
      chips: 360,
      bet: 0,
      dealer: true, // true
      status: 'raise', // fold, all-in, active, call, check, raise, bet
    },
    {
      you: false,
      seat: 3,
      nickname: 'sergey',
      chips: 360,
      bet: 0,
      dealer: true, // true
      status: 'raise', // fold, all-in, active, call, check, raise, bet
    },
    {
      you: false,
      seat: 3,
      nickname: 'sergey',
      chips: 360,
      bet: 0,
      dealer: true, // true
      status: 'raise', // fold, all-in, active, call, check, raise, bet
    },
  ],
};
