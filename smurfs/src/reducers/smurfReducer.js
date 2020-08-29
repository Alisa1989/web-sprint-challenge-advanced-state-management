import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF} from '../actions/smurfActions';

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
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: [...state.smurfs, action.payload]
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload};
        case ADD_SMURF:
            return {
                ...state,
                smurf:[...state, action.payload]};
        default:
            return state;
    }
}