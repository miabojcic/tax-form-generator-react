import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const Registration: React.FC = () => {
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
    const classes=useStyles();


    return(
        <form className={classes.container}>
            <h2>Tax Form Generator</h2>
            <div className={classes.registerInput}>
                <TextField
                    className={classes.input}
                    id="outlined-dense"
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    required
                />
                <TextField
                    className={classes.input}
                    id="outlined-dense"
                    label="First Name"
                    variant="outlined"
                    type="text"
                    required
                />
                <TextField
                    className={classes.input}
                    id="outlined-dense"
                    label="Last Name"
                    variant="outlined"
                    type="text"
                    required
                />
                <TextField
                    className={classes.input}
                    id="outlined-dense"
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                />
                <TextField
                    className={classes.input}
                    id="outlined-dense"
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
