import React from 'react';
import Button from '@material-ui/core/Button';
import { Menu } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

export const Header: React.FC = () => {
    const useStyles = makeStyles({
        header: {
            margin: '1rem',
            display: 'flex',
        },
        spacer: {
            flexGrow: 1,
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
            <Button size="small">
                Dashboard
            </Button>
            <Button size="small">
            Generate Form
            </Button>
            <Button size="small">
                Settings
            </Button>
            <div className={classes.spacer}></div>
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
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
