import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Player from './pages/player/Player';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/player/:player' element={<Player />} />
    </Routes>
    <Outlet />
  </BrowserRouter>,
  rootElement
)