import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
    links: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0 30px',
    }});

export const Login: React.FC = () => {

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
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                />
                <div className={classes.links}>
                    <Link to="/register">Create account</Link>
                    <Link to="/register">Forgot password</Link>
                </div>
                <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                >
                    Login
                </Button>
            </div>
        </form>
    );
}
