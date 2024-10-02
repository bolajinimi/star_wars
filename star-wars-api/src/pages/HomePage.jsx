// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, setCurrentPage, addFavorite } from '../store/charactersSlice';
import { Link } from 'react-router-dom';
import '../styles/pages/_homepage.scss';
import Header from '../components/Header'; // Import SCSS here

const HomePage = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.list);
  const currentPage = useSelector((state) => state.characters.currentPage);
  const totalPages = useSelector((state) => state.characters.totalPages);

  useEffect(() => {
    dispatch(fetchCharacters(currentPage)); // Fetch characters for the current page
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div className="homepage">
      <Header />
      <h1>Star Wars Characters</h1>
      <div className="table-container">
        <table className="character-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => (
              <tr key={character.name}>
                <td>
                  <Link to={`/character/${character.url.split('/').slice(-2, -1)}`}>
                    {character.name}
                  </Link>
                </td>
                <td>{character.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button 
          className="pagination-button" 
          disabled={currentPage === 1} 
          onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          className="pagination-button" 
          disabled={currentPage === totalPages} 
          onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
