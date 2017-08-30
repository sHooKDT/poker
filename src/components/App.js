import React, { Component } from 'react';
// import io from 'socket.io-client';
// import Table from './Table';
import Landing from './Landing/';

class App extends Component {
  componentWillMount() {
    // const socket = io('http://localhost:4000', {
    //   path: '/test',
    // });
    // socket.connect();
    // socket.send('Hello, motherfuckers!');
    // socket.on('message', (msg) => {
    //   window.alert(msg);
    // });
  }

  render() {
    return <Landing />;
    // return <Table />;
  }
}

export default App;
