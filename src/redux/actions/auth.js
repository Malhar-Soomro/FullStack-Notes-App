import { AUTH, LOGOUT } from "../constants/actionTypes"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db, auth } from "../../firebase"
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth"

export const signup = (firstName, lastName, email, password, navigate) => async (dispatch) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);

        // Add a new document in collection "cities"
        await setDoc(doc(db, "users", response.user.uid), {
            firstName,
            lastName,
            initials: firstName[0] + lastName[0]
        });
        dispatch({ type: AUTH, payload: { firstName, lastName, initials: `${firstName[0]}${lastName[0]}` } });
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
    console.log("in login")
    try {
        await signInWithEmailAndPassword(auth, email, password);
        const docRef = doc(db, 'users', auth.currentUser.uid)
        getDoc(docRef)
            .then(doc => {
                console.log("login action --> ", doc.data())
                dispatch({ type: AUTH, payload: doc.data() })
                navigate("/")
            })
    }
    catch (error) {
        console.log(error);
    }
}


