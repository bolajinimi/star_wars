import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharacters } from '../store/charactersSlice';

const Header = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(searchCharacters(e.target.value));
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Search Star Wars characters..."
        value={query}
        onChange={handleSearch}
      />
    </header>
  );
};

export default Header;
