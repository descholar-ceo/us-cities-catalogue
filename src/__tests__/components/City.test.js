import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ONE_SAMPLE_CITY } from '../../assets/samples/cities-sample';
import City from '../../components/City';

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
