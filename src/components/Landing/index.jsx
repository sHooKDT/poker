import React from 'react';

import SignUpFrame from './SignUpFrame';

import './index.css';

class Landing extends React.Component {
  render() {
    return (
      <div className="stack-layout">
        <div className="stack-frame frame-red frame-50h">Hello, world!</div>
        <SignUpFrame />
      </div>
    );
  }
}

export default Landing;
