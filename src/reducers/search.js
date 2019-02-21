import * as ActionTypes from '../actions/types';

const initialState = {
  isLoaded: false,
  collections: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        collections: action.payload
      }
    default:
      return state
  }
};