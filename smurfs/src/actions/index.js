/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios'; 

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res)
      dispatch({ type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => console.log(err))
}

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';

export const addSmurf = smurf => dispatch => {
  console.log(smurf)
  dispatch({ type: ADD_START});
  axios 
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res.data)
      dispatch({ type: ADD_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}

// export const UPDATE_START = 'UPDATE_START'
// export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';


// export const updateSmurf = id => dispatch => {
//   console.log(id)
//   dispatch({ type: UPDATE_START })
//   axios 
//     .put(`http://localhost:3333/smurfs/${id}`)
//     .then(res => {
//       console.log(res);
//       dispatch({ type: UPDATE_SUCCESS, payload: res.data,id })
//     })
// }


// export const DELETE_START = 'DELETE_START'
// export const DELETE_SUCCESS = 'DELETE_SUCCESS';

// export const updateSmurf = id => dispatch => {
//   console.log(id)
//   dispatch({ type: DELETE_START })
//   axios 
//     .put(`http://localhost:3333/smurfs/${id}`)
//     .then(res => {
//       console.log(res);
//       dispatch({ type: DELETE_SUCCESS, payload: res.data,id })
//     })
// }


