import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from "./types";
import axios from "axios";
import {APIKey} from "../APIKEY";

export const searchMovie = (text) => {
  return (dispatch, getState) => {
    dispatch({type: SEARCH_MOVIE, payload: text});
  };
};

export const fetchMovies = (text) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com?apikey=${APIKey}&s=${text}`
      );
      dispatch({type: FETCH_MOVIES, payload: response.data});
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMovie = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com?apikey=${APIKey}&i=${id}`
      );
      dispatch({type: FETCH_MOVIE, payload: response.data});
    } catch (error) {
      console.log(error);
    }
  };
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
