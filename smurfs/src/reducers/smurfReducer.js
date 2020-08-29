import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE} from '../actions/smurfActions';

export const initialState = {
    isFetching: false,
    error: "",
    smurfs:
[{
    name: "Smurf from Reducer",
    age: 99,
    height: 99,
    id: 99
}]
};

export const smurfReducer = (state =initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case ADD_SMURF_SUCCESS:
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            };
        case ADD_SMURF_FAILURE:
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload};
        case ADD_SMURF_START:
            return state;
        default:
            return state;
    }
}