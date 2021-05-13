import { createBrowserHistory } from 'history'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'

import Home from '../pages/Home/'

export const history = createBrowserHistory();

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Routes;
