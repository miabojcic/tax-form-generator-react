import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '50px',
        alignItems: 'center',
    },
    registerInput: {
        display: 'flex',
        flexDirection: 'column',
        margin: '50px',
        alignItems: 'center',
    },
    input: {
        margin: '10px',
    },
});

export const Registration: React.FC = () => {

    const classes=useStyles();

    return(
        <form className={classes.container}>
            <h2>Tax Form Generator</h2>
            <div className={classes.registerInput}>
                <TextField
                    className={classes.input}
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    required
                />
                <TextField
                    className={classes.input}
                    label="First Name"
                    variant="outlined"
                    type="text"
                    required
                />
                <TextField
                    className={classes.input}
                    label="Last Name"
                    variant="outlined"
                    type="text"
                    required
                />
                <TextField
                    className={classes.input}
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                />
                <TextField
                    className={classes.input}
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    required
                />
                <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                >
                    Register
                </Button>
            </div>
        </form>
    );
}
