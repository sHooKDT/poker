import React from 'react';

export default function allocatePlayers(players, Seat) {
  return players.map(player => <Seat {...player} />);
}
