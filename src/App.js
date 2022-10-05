import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
