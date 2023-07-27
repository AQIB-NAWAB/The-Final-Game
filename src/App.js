import './App.css';
import Navbar from './components/Navbar';
// import StakeGold from './components/gold';
// import gold from './components/gold';
import Gold from './components/gold';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Partners from './pages/partners';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Gold" element={<Gold/>}/>
      {/* <Route path="/Partners" element={<Partners/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
