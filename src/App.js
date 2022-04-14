import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Details from './pages/Details';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/detail/:id" element={<Details />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
