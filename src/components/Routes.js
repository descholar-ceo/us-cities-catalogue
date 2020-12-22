import { Route, Switch } from 'react-router-dom';
import Details from '../pages/Details';
import Home from '../pages/Home';
import Fourofourpage from '../pages/Fourofourpage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/details" component={Details} />
    <Route component={Fourofourpage} />
  </Switch>
);

export default Routes;
