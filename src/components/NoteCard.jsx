import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { DeleteOutlineOutlined, NoteSharp } from '@material-ui/icons';
import React, { useEffect } from 'react'

const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(2),
        marginTop: 20,
        border: "1px grey solid"
    },
    avatar: {
        backgroundColor: orange[500],
    }
}))
const NoteCard = ({ id, title, category, detail, notes }) => {


    const deleteData = async (id) => {
        // await fetch(`http://localhost:5000/notes/${id}`, {
        //     method: 'DELETE'
        // });

        // const newNotes = notes.filter(note => note.id !== id);
        // setNotes(newNotes)

    };



    const classes = useStyle();
    return (

        <Card
            className={classes.card}
        // elevation={1}
        >
            <CardHeader
                avatar={

                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => deleteData(id)
                    }>
                        <DeleteOutlineOutlined />
                    </IconButton>
                }
                title={title}
                subheader={category}

            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {detail}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NoteCard
