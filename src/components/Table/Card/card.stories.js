import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Card from '.';

storiesOf('Card', module)
  .add('Queen Clubs', () => <Card show data={{ suit: 'c', rank: 'Q' }} />)
  .add('7 Diamonds', () => <Card show data={{ suit: 'd', rank: '7' }} />)
  .add('Muck', () => <Card />)
  .addDecorator(withKnobs)
  .add('Custom', () => {
    const muck = boolean('Muck', false);
    const suit = select(
      'Suit',
      {
        c: 'Clubs',
        d: 'Diamonds',
        s: 'Spikes',
        h: 'Hearts',
      },
      'c',
    );
    const rank = text('Rank', 'K');
    return <Card show={!muck} suit={suit} rank={rank} />;
  });
