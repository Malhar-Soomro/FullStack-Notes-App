import { db, auth } from "../../firebase"
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore"
import { CREATE_NOTE, GET_NOTES, DELETE_NOTE } from "../constants/actionTypes"


//specifying the collection in the db
const postCollectionRef = collection(db, "notes")

export const createNote = (title, detail, category) => async (dispatch) => {
    // console.log("auth.currentUser.displayName", auth.currentUser.displayName)
    // console.log("auth.currentUser.uid", auth.currentUser.uid)

    console.log("in createPost action")
    console.log(title, detail, category)

    const doc = {
        title,
        detail,
        category,
        author: {
            // name: auth.currentUser.displayName
            id: auth.currentUser.uid
        }
    }
    await addDoc(postCollectionRef, doc);
    dispatch({ type: CREATE_NOTE, payload: doc });
}

export const getPosts = () => async (dispatch) => {
    const postCollectionRef = collection(db, "posts")
    const data = await getDocs(postCollectionRef, "posts");
    dispatch({ type: GET_NOTES, payload: data })

}

export const deletePost = (postId) => async (dispatch) => {
    console.log("deleting the post", postId)
    const post = doc(db, "posts", postId);
    await deleteDoc(post);
    // dispatch({ type: DELETE_POST, payload: postId });
}