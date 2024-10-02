import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/charactersSlice';
import { MdFavoriteBorder, MdDelete } from "react-icons/md"; 
import '../styles/App.scss';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.characters.favorites);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`).then((response) => {
      setCharacter(response.data);
    });
  }, [id]);

  const isFavorite = favorites.some((fav) => fav.name === character?.name);

  return character ? (
    <div className="character-details">
      <h2 className="character-name">{character.name}</h2>
      <div className="character-info">
        <div className="info-item">
          <strong>Height:</strong> {character.height}
        </div>
        <div className="info-item">
          <strong>Mass:</strong> {character.mass}
        </div>
        <div className="info-item">
          <strong>Hair Color:</strong> {character.hair_color}
        </div>
        <div className="info-item">
          <strong>Skin Color:</strong> {character.skin_color}
        </div>
        <div className="info-item">
          <strong>Eye Color:</strong> {character.eye_color}
        </div>
        <div className="info-item">
          <strong>Birth Year:</strong> {character.birth_year}
        </div>
        <div className="info-item">
          <strong>Gender:</strong> {character.gender}
        </div>
        <div className="info-item">
          <strong>Homeworld:</strong> {character.homeworld}
        </div>
        <div className="info-item">
          <strong>Films:</strong> {character.films.join(', ')}
        </div>
      </div>
      <button
        className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
        onClick={() =>
          isFavorite ? dispatch(removeFavorite(character)) : dispatch(addFavorite(character))
        }
      >
        {isFavorite ? (
          <>
            Remove <MdDelete />
          </>
        ) : (
          <>
            Add  <MdFavoriteBorder /> 
          </>
        )}
      </button>
    </div>
  )  : (
    <div>Loading...</div>
  );
};

export default CharacterDetails;
