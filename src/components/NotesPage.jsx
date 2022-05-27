import { Container, Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import NoteCard from '../components/NoteCard';
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../redux/actions/notes"
import { auth } from "../firebase"
import { useLocation } from 'react-router-dom';

const NotesPage = () => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("data"))
    const notes = useSelector((state) => state.notes);
    const location = useLocation();
    console.log(notes, user, auth)


    useEffect(() => {
        console.log("useEffect")
        dispatch(getNotes())
    }, []);


    // useEffect(() => {
    //     dispatch(getNotes())
    // }, [location, dispatch]);


    return (
        <Container>
            <Grid container >
                {(notes && user) &&
                    notes.map(note => {
                        if (note.authorId === auth.currentUser.uid) {
                            return (
                                <Grid key={note.id} item lg={4} md={6}>
                                    <NoteCard
                                        id={note.id}
                                        title={note.title}
                                        category={note.category}
                                        detail={note.detail}
                                        notes={notes}
                                    />
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        </Container>
    )
}

export default NotesPage;
