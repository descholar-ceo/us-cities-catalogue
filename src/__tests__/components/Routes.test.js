import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../components/Routes';

describe('Test Routes component', () => {
  it('Renders the Routes component', done => {
    const RoutesComp = shallow(<BrowserRouter><Routes /></BrowserRouter>);
    expect(RoutesComp.containsAllMatchingElements(<Routes />)).toBeTruthy();
    done();
  });
});

describe('Test the snapshot of Routes component', () => {
  it('Render the correct snapshot', done => {
    const RoutesSnapshot = renderer.create(<BrowserRouter><Routes /></BrowserRouter>).toJSON();
    expect(RoutesSnapshot).toMatchSnapshot();
    done();
  });
});
