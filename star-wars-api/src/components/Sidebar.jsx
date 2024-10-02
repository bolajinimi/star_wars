import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../store/charactersSlice';
// import { CiCircleRemove } from "react-icons/ci";

const Sidebar = () => {
  const favorites = useSelector((state) => state.characters.favorites);
  const dispatch = useDispatch();

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (storedFavorites.length) {
      // Dispatch action to add stored favorites to the Redux store if needed
      // Here you would dispatch an action to add these to your state
    }
  }, []);

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <aside>
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
