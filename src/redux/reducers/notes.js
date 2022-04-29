import { CREATE_NOTE, GET_NOTES, DELETE_NOTE } from "../constants/actionTypes";


const authReducer = (state = null, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return state;
        case GET_NOTES:
            return action.payload.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        default:
            return state;
    }
}

export default authReducer;


