import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyles } from '../assets/styles/globalStyles';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Favorites from '../pages/Favorites';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/favorites" component={Favorites}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
)

export default App;
