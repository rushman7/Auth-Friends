import {
  ERROR,
  GETTING_START,
  GET_SUCCESS,
  POSTING_START,
  POST_SUCCESS
} from '../actions';

const initialState = {
  friends: [],
  display: false,
  error: '',
  isFetching: false
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTING_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case GET_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        friends: action.payload
      }
    case POSTING_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case POST_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        friends: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}