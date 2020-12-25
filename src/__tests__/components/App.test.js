import { createStore } from 'redux';
import { render as rtlRenderer } from '@testing-library/react';
import { Provider } from 'react-redux';
import cityReducer from '../../redux/reducers/city';

const render = (
  ui, { initialState, store = createStore(cityReducer, initialState), ...renderOptions } = {},
) => {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return rtlRenderer(ui, { wrapper: Wrapper, ...renderOptions });
};
