import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Loading from '../../components/Loading';

describe('Test Loading component', () => {
  it('Renders the loading component', done => {
    const loadingComp = shallow(<Loading />);
    expect(loadingComp.type()).toBe('div');
    expect(loadingComp.find('div.loader').exists()).toBe(true);
    done();
  });
});

describe('Test the snapshot of Loading component', () => {
  it('Render the correct snapshot', done => {
    const loadingSnapshot = renderer.create(<Loading />).toJSON();
    expect(loadingSnapshot).toMatchSnapshot();
    done();
  });
});
