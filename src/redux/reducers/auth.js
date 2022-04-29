import { AUTH, LOGOUT } from "../constants/actionTypes";


const authReducer = (state = false, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("data", JSON.stringify(action.payload))
            return true;
        case LOGOUT:
            console.log("logout")
            localStorage.clear();
            return state;
        default:
            return state;
    }
}

export default authReducer;


