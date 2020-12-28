import { shallow } from 'enzyme';
import { App } from '../../components/App';
import Routes from '../../components/Routes';

describe('Test App component', () => {
  it('Renders the App component', done => {
    const AppComp = shallow(<App getCitiesAction={jest.fn()} />);
    expect(AppComp.containsMatchingElement(<Routes />)).toBeTruthy();
    done();
  });
});
