import { shallow } from 'enzyme';
import app from '../../components/App';

describe('Test App component', () => {
  it('Renders the App component', done => {
    const AppComp = shallow(<app />);
    expect(AppComp.containsMatchingElement(<app />)).toBeTruthy();
    done();
  });
});
