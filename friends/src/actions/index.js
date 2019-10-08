import { axiosWithAuth } from '../utils/axiosAuth';

export const ERROR = 'ERROR';
export const GETTING_START = 'GETTING_START';
export const GET_SUCCESS = 'GET_SUCCESS';

export const POSTING_START = 'POSTING_START';
export const POST_SUCCESS = 'POST_SUCCESS';

export const getFriends = () => dispatch => {
  dispatch({ type: GETTING_START });
  axiosWithAuth()
    .get('/friends')
    .then(res => {
      console.log(res.data)
      dispatch({ type: GET_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: ERROR, payload: err })
    })
}

export const addFriend = data => dispatch => {
  console.log(data)
  dispatch({ type: POSTING_START });
  axiosWithAuth()
    .post('/friends', data)
    .then(res => {
      console.log(res.data)
      dispatch({ type: GET_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: ERROR, payload: err })
    })
}