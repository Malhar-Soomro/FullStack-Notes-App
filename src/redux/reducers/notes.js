import { CREATE_NOTE, GET_NOTES, DELETE_NOTE, NO_NOTES } from "../constants/actionTypes";


const authReducer = (state = null, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return state;
        case GET_NOTES:
            return action.payload.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        // case NO_NOTES:
        //     return null;
        default:
            return state;
    }
}

export default authReducer;


