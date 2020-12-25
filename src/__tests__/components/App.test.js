/* eslint-disable no-restricted-globals */
import { createStore } from 'redux';
import PropTypes from 'prop-types';
import { render as rtlRenderer } from '@testing-library/react';
import { Provider } from 'react-redux';
import cityReducer from '../../redux/reducers/city';
import App from '../../components/App';
import { ONE_SAMPLE_CITY } from '../../assets/samples/cities-sample';

const render = (
  ui, { initialState, store = createStore(cityReducer, initialState), ...renderOptions } = {},
) => {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  Wrapper.propTypes = { children: PropTypes.shape().isRequired };
  return rtlRenderer(ui, { wrapper: Wrapper, ...renderOptions });
};

describe('Test App component', () => {
  it('The App component renders without crash', done => {
    render(<App />, { initialState: { cities: ONE_SAMPLE_CITY } });
    expect(screen.getByText(/New York/i)).toBeInTheDocument();
    done();
  });
});
