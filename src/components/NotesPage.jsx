import { Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import NoteCard from '../components/NoteCard';

const NotesPage = () => {
    const [notes, setNotes] = useState([{
        "id": 1,
        "title": "json-server222",
        "category": "work",
        "detail": "Get a full fake REST API with zero coding in less than 30 seconds (seriously)Created with <3 for front-end developers who need a quick back-end for prototyping and mocking"
    },
    {
        "id": 2,
        "title": "Withdraw money333",
        "category": "reminder",
        "detail": "Get a full fake REST API with zero  with <3 for front-end developers who need a quick back-end for prototyping and mocking"
    }
    ]);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <Container>
            <Grid container >
                {
                    notes.map(note => {
                        return (
                            <Grid key={note.id} item lg={4} md={6}>
                                <NoteCard
                                    id={note.id}
                                    title={note.title}
                                    category={note.category}
                                    detail={note.detail}
                                    setNotes={setNotes}
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
