/* eslint-disable jsx-a11y/control-has-associated-label */
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { FaSearch } from 'react-icons/fa';
import searchForm, { SearchForm } from '../../components/SearchForm';

const initialState = {};
const mockStore = configureStore();
let wrapper;
let newWrapper;
let store;

describe('Test SearchForm component snapshot', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = renderer.create(<searchForm store={store} />).toJSON();
  });
  it('Renders the SearchForm component', done => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});

describe('Test SearchForm component unconnected', () => {
  beforeEach(() => {
    const mockGetSearchQueryFn = jest.fn();
    newWrapper = shallow(<SearchForm getSearchQuery={mockGetSearchQueryFn} />);
  });
  it('Renders the SearchForm component', done => {
    expect(newWrapper.containsMatchingElement(<button type="submit"><FaSearch /></button>)).toBeTruthy();
    done();
  });

  it('Has Form', done => {
    expect(newWrapper.find('form').exists()).toBeTruthy();
    done();
  });

  it('Has input field', done => {
    expect(newWrapper.find('input').exists()).toBeTruthy();
    done();
  });

  it('Has button', done => {
    expect(newWrapper.find('button').exists()).toBeTruthy();
    done();
  });
});
