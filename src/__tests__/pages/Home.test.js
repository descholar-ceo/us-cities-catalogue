import { shallow } from 'enzyme';
import React from 'react';
import Home from '../../pages/Home';

describe('Test Home component', () => {
  it('Renders the Home component', done => {
    const HomeComp = shallow(<Home />);
    expect(HomeComp.type()).toBe(React.Fragment);
    done();
  });
});
