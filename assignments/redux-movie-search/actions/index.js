// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';
import OMDB_API_KEY from '../api_key.js'

import fetch from 'isomorphic-fetch';

// action creators go here
export const fetchMovie = (searchParam, dispatch) => {
    let searchVal = searchParam;
    
    
    return (dispatch) => {
        dispatch({ type: LOAD_REQUEST })
        
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${searchVal}`)
            .then((response) => response.json())
                .then((responseJson) => {
                //dispatch user found success
                dispatch({
                    type: LOAD_SUCCESS,
                    payload: 
                       responseJson.Search
                })

                })

            .catch((err) => {
                //dispatch user not found error
                dispatch({type: LOAD_FAILURE})
            })

    }
}

export const requestMovies = () => {
	// create action for requesting movies
	// ...
};

export const someActionCreator = (jsonData) => {
  return {
    type: LOAD_SUCCESS,
    // anything else you want!!
    // include movies coming from the data

    data: jsonData.Search
    // TODO: handle edge cases: null response, no search results
  }
};