import React from 'react';
import PropTypes from 'prop-types';

import createLayout from './creator';
import genX6 from './layout-x6';
import genX10 from './layout-x10';

const SeatsLayout = (props) => {
  const Layout = props.count <= 6 ? createLayout(genX6) : createLayout(genX10);

  return (
    <Layout>
      {props.children}
    </Layout>
  );
};

SeatsLayout.propTypes = {
  count: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default SeatsLayout;
