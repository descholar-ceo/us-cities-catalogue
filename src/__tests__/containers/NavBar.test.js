import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../../containers/NavBar';

describe('Test the snapshot of Navbar component', () => {
  it('Render the correct snapshot', done => {
    const NavbarSnapshot = renderer.create(<BrowserRouter><Navbar renderedComponent="details" /></BrowserRouter>).toJSON();
    expect(NavbarSnapshot).toMatchSnapshot();
    done();
  });
});
