import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Routes from './Routes';
import { getCitiesAction } from '../redux/actions';

export const App = ({ getCitiesAction }) => {
  useEffect(() => getCitiesAction(), []);
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

App.propTypes = {
  getCitiesAction: PropTypes.func.isRequired,
};

export default connect(null, { getCitiesAction })(App);
