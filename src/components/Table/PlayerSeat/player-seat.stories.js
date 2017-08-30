import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs';

import PlayerSeat from '.';

const example = {
  you: false,
  nickname: 'Albert',
  chips: 32670,
  status: 'fold',
  cards: [],
};

storiesOf('Seat', module)
  .addDecorator(withKnobs)
  .add('Default', () => <PlayerSeat {...example} />)
  .add('Custom', () => {
    const data = {
      you: boolean('You', false),
      nickname: text('Nickname', 'Player'),
      chips: number('Chips', 1000),
      status: select(
        'Status',
        {
          active: 'Active',
          'all-in': 'All-in',
          bet: 'Bet',
          call: 'Call',
          check: 'Check',
          fold: 'Fold',
          raise: 'Raise',
        },
        'fold',
      ),
    };
    return <PlayerSeat {...data} />;
  });
