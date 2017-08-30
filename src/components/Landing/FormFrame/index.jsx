import React from 'react';

import './index.css';

function FormFrame() {
  return (
    <div className="stack-frame frame-form">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Login" />
      <input type="password" placeholder="Password" />
      <input type="submit" value="Sign Up" />
    </div>
  );
}

export default FormFrame;
