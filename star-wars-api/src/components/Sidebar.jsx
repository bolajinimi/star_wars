import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../store/charactersSlice';
import StarWars from '../assets/star_wars_logo.webp';

const Sidebar = () => {
  const favorites = useSelector((state) => state.characters.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Logic to dispatch stored favorites if needed
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={StarWars} alt="Star Wars Logo" className="star-logo" />
      </div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.name}>
            <Link to={`/character/${favorite.url.split('/').slice(-2, -1)}`}>{favorite.name}</Link>
            <button 
              onClick={() => dispatch(removeFavorite(favorite))} 
              aria-label={`Remove ${favorite.name} from favorites`}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
