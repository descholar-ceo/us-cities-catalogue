import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import createMockStore from 'redux-mock-store';
import Navbar from '../../containers/NavBar';

const initialState = {};
const mockStore = createMockStore();
let wrapper;
let store;

describe('Test the snapshot of Navbar component', () => {
  store = mockStore(initialState);
  wrapper = renderer.create(<BrowserRouter><Navbar store={store} renderedComponent="details" /></BrowserRouter>).toJSON();
  it('Render the correct snapshot', done => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
