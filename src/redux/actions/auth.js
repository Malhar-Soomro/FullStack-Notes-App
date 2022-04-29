import { AUTH, LOGOUT } from "../constants/actionTypes"
import { auth } from "../../firebase"
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth"


export const signup = (name, email, password, navigate) => async (dispatch) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const { user: { providerData } } = result;
        dispatch({ type: AUTH, payload: { ...providerData[0], displayName: name } });
        navigate("/")
    }
    catch (error) {
        console.log(error);
    }
}

export const signout = (navigate) => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch({ type: LOGOUT })
        navigate("/")

    }
    catch (error) {
        console.log(error);
    }
}

export const login = (email, password, navigate) => async (dispatch) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const { user: { providerData } } = result;
        dispatch({ type: AUTH, payload: providerData[0] });
        navigate("/")


    }
    catch (error) {
        console.log(error);
    }
}