import './App.css';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Create from './screens/Create';
import Catering from './screens/Catering';
import Contact from './screens/Contact';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <nav className='Menu-navigate'>
            <Link to="/" className='My-card'>Home</Link>
            <Link to="/crea" className='My-card'>Create</Link>
            <Link to="/catering" className='My-card'>Catering</Link>
            <Link to="/contact" className='My-card'>Contact Us</Link>
          </nav>
          <div>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/crea" element={<Create />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<HomeScreen />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;