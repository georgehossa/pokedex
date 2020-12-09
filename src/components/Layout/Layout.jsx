import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Layout.styles';
import Header from '../Header';

const Layout = ({children}) => (
  <>
    <Header/>
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
