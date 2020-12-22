import { Route, Switch } from 'react-router-dom';
import Details from '../pages/Details';
import Home from '../pages/Home';
import Fourofourpage from '../pages/Fourofourpage';

// const city = {
//   city: 'Columbus',
//   growth_from_2000_to_2013: '14.8%',
//   latitude: 39.9611755,
//   longitude: -82.99879419999999,
//   population: '822553',
//   rank: '15',
//   state: 'Ohio',
// };

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/details">
      <Details />
    </Route>
    <Route component={Fourofourpage} />
  </Switch>
);

export default Routes;
