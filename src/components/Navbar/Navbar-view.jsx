
import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Cancel, Search } from "@material-ui/icons";
import { useState } from "react";
import React from 'react';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    // search: {
    //     display: "flex",
    //     alignItems: "center",
    //     backgroundColor: alpha(theme.palette.common.white, 0.15),
    //     "&:hover": {
    //         backgroundColor: alpha(theme.palette.common.white, 0.25),
    //     },
    //     borderRadius: theme.shape.borderRadius,
    //     width: "50%",
    //     [theme.breakpoints.down("sm")]: {
    //         display: (props) => (props.open ? "flex" : "none"),
    //         width: "50%",
    //     },
        
    // },
    // input: {
    //     color: "white",
    //     marginLeft: theme.spacing(1),
    // },
    // cancel: {
    //     [theme.breakpoints.up("sm")]: {
    //         display: "none",
    //     },
    // },
    // searchButton: {
    //     marginRight: theme.spacing(2),
    //     [theme.breakpoints.up("sm")]: {
    //         display: "none",
    //     },
    // },
    icons: {
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            marginRight:theme.spacing(3),
        },
    },
}));

const View = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });

    const handleOpenUserMenu = ()=>{
        console.log("clicked")
    }
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    <h2>Juit Olx</h2>
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    <h2>J olx</h2>
                </Typography>
                {/* <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.input} />
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                </div> */}
                <div className={classes.icons}>
                    {/* <Search
                        style={{fontSize:'30px'}}
                        className={classes.searchButton}
                        onClick={() => setOpen(true)}
                    /> */}

                    <Badge badgeContent={2} color="secondary" className={classes.badge}>

                        <Tooltip title="Show Favorites ">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <FavoriteIcon style={{ fontSize: '25px',color:'white' }} />
                            </IconButton>
                        </Tooltip>
                    </Badge>
                    <Badge className={classes.badge}>
                        <Tooltip title="Logout">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <LogoutIcon style={{fontSize:'25px',color:'white'}}/>
                            </IconButton>
                        </Tooltip>   
                        </Badge>
                    <Badge  color="secondary" className={classes.badge}>
                    <Tooltip title="Account ">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar>N </Avatar>
                            </IconButton>
                        </Tooltip>
                        </Badge>
                        
                    
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default View;
