import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ONE_SAMPLE_CITY } from '../../assets/samples/cities-sample';
import City from '../../components/City';

describe('Test City component', () => {
  it('Renders the City component', done => {
    const cityComp = shallow(<BrowserRouter><City city={ONE_SAMPLE_CITY[0]} /></BrowserRouter>);
    // expect(cityComp.find('div.list-one-city').exists()).toBe(true);
    console.log(cityComp);
    done();
  });
});

describe('Test the snapshot of City component', () => {
  it('Render the correct snapshot', done => {
    const citySnapshot = renderer.create(
      <BrowserRouter>
        <City city={ONE_SAMPLE_CITY[0]} />
      </BrowserRouter>,
    ).toJSON();
    expect(citySnapshot).toMatchSnapshot();
    done();
  });
});
