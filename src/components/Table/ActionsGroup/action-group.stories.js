import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import ActionsGroup from '.';

storiesOf('ActionsGroup', module).addDecorator(withKnobs).add('Custom', () => {
  const available = {
    fold: boolean('Fold', false),
    check: boolean('Check', true),
    call: boolean('Call', true),
    raise: boolean('Raise', true),
  };
  const restrictions = {
    min: number('Min bet', 100),
    max: number('Max bet', 3000),
    step: number('Step', 1),
  };
  return <ActionsGroup available={available} restrictions={restrictions} />;
});
