import { db, auth } from "../../firebase"
import { addDoc, collection, getDocs, doc, deleteDoc, query, where } from "firebase/firestore"
import { CREATE_NOTE, GET_NOTES, DELETE_NOTE, NO_NOTES } from "../constants/actionTypes"


//specifying the collection in the db
const postCollectionRef = collection(db, "notes")

export const createNote = (title, detail, category) => async (dispatch) => {

    const doc = {
        title,
        detail,
        category,
        authorId: auth.currentUser.uid
    }
    await addDoc(postCollectionRef, doc);
    dispatch({ type: CREATE_NOTE, payload: doc });
}

export const getNotes = () => async (dispatch) => {
    const q = query(postCollectionRef, where("authorId", "==", auth.currentUser?.uid));
    const querySnapshot = await getDocs(q);
    dispatch({ type: GET_NOTES, payload: querySnapshot })
}

export const deletePost = (postId) => async (dispatch) => {
    console.log("deleting the post", postId)
    const post = doc(db, "posts", postId);
    await deleteDoc(post);
    // dispatch({ type: DELETE_POST, payload: postId });
}