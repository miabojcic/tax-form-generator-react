import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { UserRegistration } from './user-registration';
import axios from 'axios';
import { Redirect, Switch } from 'react-router-dom';
import { useSnackbar } from 'notistack';


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

    const [state, setState] = useState<UserRegistration>({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });

    const [redirection, setRedirection] = useState(false);

    const { enqueueSnackbar } = useSnackbar();


    function onChange(e: any) {
        setState({ ...state, [e.target.name]: e.target.value } as UserRegistration);
    }

    function handleSubmit(e:any) {
        const headers = {
            "Content-Type": "application/json"
        }
        e.preventDefault();
        axios.post('http://localhost:5000/api/accounts', state, {"headers" : headers})
            .then(() => {
                    setRedirection(true);
                    enqueueSnackbar('Registered successfully.', { autoHideDuration: 1000 });

            })
            .catch(() => {
                enqueueSnackbar('Error. Failed to add user.',{ autoHideDuration: 1000 })
            })
    }
    function navigate() {
        return(
            <Switch>
                <Redirect to="/login"/>
            </Switch>
        );

    }

    return(
        <form className={classes.container} onSubmit={handleSubmit}>
            <h2>Tax Form Generator</h2>
            <div className={classes.registerInput}>
                <TextField
                    className={classes.input}
                    id="email"
                    name="email"
                    value={state.email}
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    required
                    onChange={onChange}
                />
                <TextField
                    className={classes.input}
                    id="first-name"
                    name="firstName"
                    value={state.firstName}
                    label="First Name"
                    variant="outlined"
                    type="text"
                    required
                    onChange={onChange}
                />
                <TextField
                    className={classes.input}
                    id="last-name"
                    name="lastName"
                    value={state.lastName}
                    label="Last Name"
                    variant="outlined"
                    type="text"
                    required
                    onChange={onChange}
                />
                <TextField
                    className={classes.input}
                    id="password"
                    name="password"
                    value={state.password}
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                    onChange={onChange}
                />
                <TextField
                    className={classes.input}
                    id="confirm-password"
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    required
                />
                <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    type="submit"
                >
                    Register
                </Button>
            </div>
            {redirection && navigate()}
        </form>
    );
}
