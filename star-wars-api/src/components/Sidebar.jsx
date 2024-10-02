import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../store/charactersSlice';

const Sidebar = () => {
  const favorites = useSelector((state) => state.characters.favorites);
  const dispatch = useDispatch();

  return (
    <aside>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.name}>
            <Link to={`/character/${favorite.url.split('/').slice(-2, -1)}`}>{favorite.name}</Link>
            <button onClick={() => dispatch(removeFavorite(favorite))}>Remove</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
