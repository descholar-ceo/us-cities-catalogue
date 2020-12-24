import renderer from 'react-test-renderer';
import App from '../../components/App';

describe('Test App component', () => {
  it('It matches the snapshot', done => {
    const appComponent = renderer.create(<App />).toJSON();

    expect(appComponent).toMatchSnapshot();
    done();
  });
});
