// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdvocatesPage from './pages/AdvocatesPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path=''></Route>
        <Route element={<AdvocatesPage />} path='/advocates/:username'></Route>
      </Routes>
    </Router>
  );
}

export default App;
