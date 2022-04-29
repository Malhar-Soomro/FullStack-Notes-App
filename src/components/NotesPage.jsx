import { Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import NoteCard from '../components/NoteCard';
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../redux/actions/notes"

const NotesPage = () => {
    const dispatch = useDispatch();


    const notes = useSelector((state) => state.notes);

    console.log(notes)
    useEffect(() => {
        dispatch(getNotes())
    }, []);

    return (
        <Container>
            <Grid container >
                {notes &&
                    notes.map(note => {
                        return (
                            <Grid key={note.id} item lg={4} md={6}>
                                <NoteCard
                                    id={note.id}
                                    title={note.title}
                                    category={note.category}
                                    detail={note.detail}
                                    // setNotes={setNotes}
                                    notes={notes}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default NotesPage;
