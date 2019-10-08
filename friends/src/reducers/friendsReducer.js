import {
  FRIENDS_START,
  FRIENDS_SUCCESS,
  FRIENDS_FAILURE
} from '../actions';

const initialState = {
  friends: [],
  display: false,
  error: '',
  isFetching: false
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FRIENDS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FRIENDS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        friends: action.payload
      }
    case FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}