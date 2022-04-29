import React from 'react'
import Drawer from '@material-ui/core/Drawer';
// yarn add icons
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'
import { Avatar, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';



const drawerWidth = 240;
const useStyle = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    page: {
        backgroundColor: "#f4f4f4",
        width: "100%",
        marginTop: "60px"
    },
    appbar: {
        backgroundColor: "#ffff",
        width: `calc(100% - ${drawerWidth}px)`
    },
    drawer: {
        width: drawerWidth
    },
    paperDrawer: {
        width: drawerWidth,
    },
    typo: {
        marginTop: "20px"
    },
    date: {
        flexGrow: 1
    },
    avatar: {
        margin: "10px"
    }
}));





const Home = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const classes = useStyle();

    return (
        <div className="flex mb-11">
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
            >
                <div className={classes.drawer}>
                    <Typography
                        className={classes.typo}
                        align="center"
                        variant="h5">
                        Notes Web App
                    </Typography>

                    <List>
                        <ListItem
                            button
                            onClick={() => navigate("/")}
                            style={location.pathname === "/" ? {
                                backgroundColor: "#D3D3D3"
                            } : null
                            }
                        >
                            <ListItemIcon>
                                <SubjectOutlined
                                    color="secondary"
                                />
                            </ListItemIcon>
                            <ListItemText primary="My Notes" />

                        </ListItem>
                        <ListItem
                            button
                            onClick={() => navigate("/create")}
                            style={location.pathname === "/create" ? {
                                backgroundColor: "#D3D3D3"
                            } : null
                            }
                        >
                            <ListItemIcon>
                                <AddCircleOutline
                                    color="secondary" />
                            </ListItemIcon>
                            <ListItemText primary="Create Note" />

                        </ListItem>
                        {/* {menuItems.map((item) => {
                            return (
                                <ListItem
                                    button
                                    onClick={() => history.push(item.path)}
                                    style={
                                        location.pathname === item.path ? {
                                            backgroundColor: "#D3D3D3"
                                        } : null
                                    }
                                >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            )
                        })} */}
                    </List>
                </div>

            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Home