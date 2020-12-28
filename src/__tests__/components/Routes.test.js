import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../components/Routes';

describe('Test Routes component', () => {
  it('Renders the Routes component', done => {
    const RoutesComp = shallow(<BrowserRouter><Routes /></BrowserRouter>);
    expect(RoutesComp.containsMatchingElement(<Routes />)).toBeTruthy();
    done();
  });
});
