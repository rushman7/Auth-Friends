import * as actionTypes from '../actions';

const initialState = {
  friends: [],
  display: false,
  error: '',
  isFetching: false,
  friend: {}
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GETTING_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case actionTypes.GET_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        friends: action.payload
      }
    case actionTypes.GETTING_SINGLE_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case actionTypes.GET_SINGLE_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        friend: action.payload
      }
    case actionTypes.POSTING_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case actionTypes.POST_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        friends: action.payload
      }
    case actionTypes.UPDATING_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case actionTypes.UPDATE_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false
      }
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}