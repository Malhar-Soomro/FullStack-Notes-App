import { CREATE_NOTE, GET_NOTES, DELETE_NOTE } from "../constants/actionTypes";


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return state;

        default:
            return state;
    }
}

export default authReducer;


