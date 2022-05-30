import { db, auth } from "../../firebase"
import { addDoc, collection, getDocs, doc, deleteDoc, query, where } from "firebase/firestore"
import { CREATE_NOTE, GET_NOTES, DELETE_NOTE } from "../constants/actionTypes"
import { useSelector } from "react-redux"


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
    // console.log(postCollectionRef, auth.currentUser?.uid)

    const uid = JSON.parse(localStorage.getItem('data'))?.uid;
    console.log(uid)

    const q = query(postCollectionRef, where("authorId", "==", uid));
    const querySnapshot = await getDocs(q);
    dispatch({ type: GET_NOTES, payload: querySnapshot })
}

export const deleteNote = (noteId) => async (dispatch) => {
    console.log("deleting the notes", noteId)
    const note = doc(db, "notes", noteId);
    await deleteDoc(note);
    dispatch({ type: DELETE_NOTE, payload: noteId })

    //     const docRef = doc(db, 'books', deleteBookForm.id.value)

    // deleteDoc(docRef)
    //     .then(() => {
    //         deleteBookForm.reset()
    //     });

    // dispatch({ type: DELETE_POST, payload: postId });
}