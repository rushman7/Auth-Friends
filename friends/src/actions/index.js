import { axiosWithAuth } from '../utils/axiosAuth';

export const FRIENDS_START = 'FRIENDS_START';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FRIENDS_START });
  axiosWithAuth()
    .get('/friends')
    .then(res => {
      console.log(res.data)
      dispatch({ type: FRIENDS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: FRIENDS_FAILURE, payload: err })
    })
}