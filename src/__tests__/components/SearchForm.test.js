/* eslint-disable jsx-a11y/control-has-associated-label */
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { FaSearch } from 'react-icons/fa';
import SearchForm from '../../components/SearchForm';

describe('Test SearchForm component snapshot', () => {
  const wrapper = renderer.create(
    <SearchForm handleSearchQueryChange={jest.fn()} handleSearchQuerySubmit={jest.fn()} />,
  ).toJSON();
  it('Renders the SearchForm component', done => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});

describe('Test SearchForm component unconnected', () => {
  const newWrapper = shallow(
    <SearchForm handleSearchQueryChange={jest.fn()} handleSearchQuerySubmit={jest.fn()} />,
  );
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
