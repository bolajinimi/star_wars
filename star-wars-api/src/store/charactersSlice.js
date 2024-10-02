// src/store/charactersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://swapi.dev/api/people';

export const fetchCharacters = createAsyncThunk('characters/fetch', async (page) => {
  const response = await axios.get(`${API_BASE_URL}/?page=${page}`);
  return response.data;
});

// Make sure this is properly exported
export const searchCharacters = createAsyncThunk('characters/search', async (query) => {
  const response = await axios.get(`${API_BASE_URL}/?search=${query}`);
  return response.data;
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    currentPage: 1,
    totalPages: 0,
    favorites: [],
    status: 'idle',
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((fav) => fav.name !== action.payload.name);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.list = action.payload.results;
        state.totalPages = Math.ceil(action.payload.count / 10); // Assuming 10 characters per page
      })
      .addCase(searchCharacters.fulfilled, (state, action) => {
        state.list = action.payload.results; // Update list with search results
        state.totalPages = Math.ceil(action.payload.count / 10); // Update total pages based on search results
      });
  },
});

// Exporting the actions and the reducer
export const { addFavorite, removeFavorite, setCurrentPage } = charactersSlice.actions;

export default charactersSlice.reducer;
