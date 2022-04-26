import { AUTH } from "../constants/actionTypes"
import { auth } from "../../firebase"
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup
} from "firebase/auth"



// export const signin = (navigate, dispatch) => {
//     signInWithPopup(auth, provider).then((result) => {
//         navigate("/")
//         dispatch({ type: AUTH, data: result })
//     })
// }


export const signup = (name, email, password) => async (dispatch) => {
    console.log(name, password, name);
    console.log(typeof (email));
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log({ ...result, displayName: name });
    }
    catch (error) {
        console.log(error);
    }
}

export const logout = () => async (dispatch) => {
    try {
        await signOut(auth);
        console.log("logout successful");
    }
    catch (error) {
        console.log(error);
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}