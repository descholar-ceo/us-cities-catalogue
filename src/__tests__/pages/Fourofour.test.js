import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Fourofour from '../../pages/Fourofourpage';

describe('Test Fourofour component', () => {
  it('Renders the Fourofour component', done => {
    const FourofourComp = shallow(<Fourofour />);
    expect(FourofourComp.type()).toBe('div');
    expect(FourofourComp.find('p').exists()).toBe(true);
    done();
  });
});

describe('Test the snapshot of Fourofour component', () => {
  it('Render the correct snapshot', done => {
    const FourofourSnapshot = renderer.create(<Fourofour />).toJSON();
    expect(FourofourSnapshot).toMatchSnapshot();
    done();
  });
});
