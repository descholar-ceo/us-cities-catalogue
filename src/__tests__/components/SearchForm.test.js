import { shallow } from 'enzyme';
import SearchForm from '../../components/SearchForm';

describe('Test SearchForm component', () => {
  it('Renders the SearchForm component', done => {
    const SearchFormComp = shallow(<SearchForm />);
    expect(SearchFormComp.type()).toBe('div');
    expect(SearchFormComp.find('div.loader').exists()).toBe(true);
    done();
  });
});
