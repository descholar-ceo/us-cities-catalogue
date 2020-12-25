import thunk from 'redux-thunk';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ONE_SAMPLE_CITY } from '../../assets/samples/cities-sample';
import SeacrcForm from '../../components/SeacrcForm';

configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = createMockStore(middleware);
const store = mockStore({ cities: ONE_SAMPLE_CITY });
store.dispatch = jest.fn();

describe('Test searchform component', () => {
  it('Render serachform component correctly', done => {
    const form = mount(<Provider store={store}><SeacrcForm /></Provider>);
    console.log({ form });
    done();
  });
});
