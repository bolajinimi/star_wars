import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import CharacterDetails from './pages/CharacterDetails';
import SearchResults from './pages/SearchResults';
import './styles/App.scss'; // Import SCSS here

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
