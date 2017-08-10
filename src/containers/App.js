import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './table/table';

class App extends Component {
  render() {
    return (
      <Table />
    );
  }
}

export default connect()(App);
