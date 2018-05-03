import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE } from '../actions';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  movies: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_REQUEST: 
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };

    case LOAD_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: true,
        movies: action.payload
      };
    }

    case LOAD_FAILURE: {
      // ....
      return {
        ...state,
        isLoading: true,
        isError: true,
        isSuccess: false,
        movies: action.payload
      };
    }

    default:
      return state;
  }
}