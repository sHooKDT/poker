import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import configureStore from '../../store';
import Table from '.';

import Table6x from '../../examples/table-6x-redux';
import Table10x from '../../examples/table-10x-redux';

const initialState6x = {
  table: Table6x,
};

const initialState10x = {
  table: Table10x,
};

storiesOf('Table/6x', module)
  .addDecorator(getStory =>
    (<Provider store={configureStore(initialState6x)}>
      {getStory()}
    </Provider>),
  )
  .add('default', () => <Table />);

storiesOf('Table/10x', module)
  .addDecorator(getStory =>
    (<Provider store={configureStore(initialState10x)}>
      {getStory()}
    </Provider>),
  )
  .add('default', () => <Table />);
