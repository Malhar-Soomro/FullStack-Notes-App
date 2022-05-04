import { db, auth } from "../../firebase"
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore"
import { CREATE_NOTE, GET_NOTES, DELETE_NOTE } from "../constants/actionTypes"


//specifying the collection in the db
const postCollectionRef = collection(db, "notes")

export const createNote = (title, detail, category) => async (dispatch) => {

    const doc = {
        title,
        detail,
        category,
        author: {
            id: auth.currentUser.uid
        }
    }
    await addDoc(postCollectionRef, doc);
    dispatch({ type: CREATE_NOTE, payload: doc });
}

export const getNotes = () => async (dispatch) => {
    const data = await getDocs(postCollectionRef, "notes");
    dispatch({ type: GET_NOTES, payload: data })
}

export const deletePost = (postId) => async (dispatch) => {
    console.log("deleting the post", postId)
    const post = doc(db, "posts", postId);
    await deleteDoc(post);
    // dispatch({ type: DELETE_POST, payload: postId });
}