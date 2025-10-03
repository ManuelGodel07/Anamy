import './App.css';
import { HashRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Create from './screens/Create';
import Catering from './screens/Catering';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <nav className='Menu-navigate'>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/crea" style={{ marginRight: '10px' }}>Crear</Link>
            <Link to="/catering" style={{ marginRight: '10px' }}>Catering</Link>
          </nav>
          <div>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/Inicio' element={<HomeScreen />} />
              <Route path='/Crea' element={<Create />} />
              <Route path='/catering' element={<Catering />} />
            </Routes>

          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
