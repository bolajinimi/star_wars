import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const searchResults = useSelector((state) => state.characters.searchResults);

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="character-list">
        {searchResults.map((character) => (
          <Link to={`/character/${character.url.split('/').slice(-2, -1)}`} key={character.name}>
            <div className="character-card">{character.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
