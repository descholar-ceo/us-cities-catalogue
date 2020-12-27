// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import SearchForm from '../../components/SearchForm';

const initialState = {};
const mockStore = configureStore();
let wrapper;
let store;

describe('Test SearchForm component', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = renderer.create(<SearchForm store={store} />);
  });
  it('Renders the SearchForm component', done => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
