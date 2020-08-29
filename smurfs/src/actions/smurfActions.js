import axios from 'axios';

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMUR_FAILURE";


export const getSmurfs = () => (dispatch) => {
    console.log("getting smurfs");
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log("response data", response.data);
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
        })
        .catch(error => {
            console.log("error response", error.data);
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: error.response });
        })
};

export const addSmurf = (item) => (dispatch) => {
    dispatch({type: ADD_SMURF_START})
    axios
        .post('http://localhost:3333/smurfs', item)
        .then(response => {
            console.log(response);
            dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data});
          })
        .catch(error => {
            console.log(error);
            dispatch({ type: ADD_SMURF_FAILURE, payload: error.response})
          });
}




