import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/charactersSlice';
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
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair: {character.hair}</p>
      <p>Skin Color: {character.color}</p>
     <p>Eye Color: {character.eye}</p>
     <p>Birth Year: {character.birth}</p>
     <p>Gender: {character.gender}</p>
     <p>Homeworld: {character.homeworld}</p>
     <p>Films: {character.films}</p>
      <button onClick={() => (isFavorite ? dispatch(removeFavorite(character)) : dispatch(addFavorite(character)))}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default CharacterDetails;
