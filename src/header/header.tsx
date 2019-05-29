import React from 'react';
import Button from '@material-ui/core/Button';
import { Menu } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
    const useStyles = makeStyles({
        header: {
            padding: '1rem',
            display: 'flex',
            backgroundColor: 'red',
        },
        spacer: {
            flexGrow: 1,
        },
        navLinks: {
          textDecoration:'none',
        },
        btn: {
            color: 'white',
        },
    });
    const classes=useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);


    function handleClick(event: any) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
    return (
        <div className={classes.header}>
            <NavLink className={classes.navLinks} to='/dashboard'>
                <Button size='small' className={classes.btn}>Dashboard</Button>
            </NavLink>
            <NavLink className={classes.navLinks} to='/generate-form'>
                <Button size='small' className={classes.btn}>Generate Form</Button>
            </NavLink>
            <NavLink className={classes.navLinks} to='/settings'>
                <Button size='small' className={classes.btn}>Settings</Button>
            </NavLink>
            <div className={classes.spacer}></div>
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined }
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.btn}
                >
                    miabojcic@gmail.com
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </div>

    );
}
