import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import AlbumInfo from '../pages/AlbumInfo';

export const history = createBrowserHistory();

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={AlbumInfo} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
