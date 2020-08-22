/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { Layout } from 'antd';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@app/global-styles';
import { colors } from '@themes';
import HomeContainer from '../HomeContainer/Loadable';

const theme = {
  fg: colors.primary,
  bg: colors.secondary
};

export function App({ location }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout.Content>
        <Route exact={true} path="/" render={HomeContainer} />
        <GlobalStyle />
      </Layout.Content>
    </ThemeProvider>
  );
}
App.propTypes = {
  location: PropTypes.object
};
export default compose(withRouter)(App);
