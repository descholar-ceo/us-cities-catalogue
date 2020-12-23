import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
