import './App.css';
import Navbar from './components/Navbar';
import StakeGold from './components/StakeGold';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/StakeGold" element={<StakeGold/>}/>
      </Routes>
    </div>
  );
}

export default App;
