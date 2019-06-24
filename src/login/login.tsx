import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link, Redirect, Switch } from 'react-router-dom';
import { Credentials } from './credentials';
// @ts-ignore
import * as jwt_decode from 'jwt-decode';
import { User } from './user';
import { JwtToken } from './jwt-token';
import { useSnackbar } from 'notistack';
import { AuthConsumer } from '../shared/auth-context';
import { http } from '../shared/http';


const Login: React.FC<{ updateState: (x: boolean, callback?: () => void) => void }> = (props) => {

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
    const classes=useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const [credentials, setCredentials] = useState<Credentials | undefined>(undefined);
    const [redirection, setRedirection] = useState(false);
    let loggedInUser : User | undefined;


    function onChange(e: any) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value } as Credentials);
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        http.post('api/auth', credentials)
            .then((response) => {
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);

                const accessToken = localStorage.getItem('accessToken');
                const decodedAccessToken: JwtToken = jwt_decode(accessToken);
                loggedInUser = {
                    id: +decodedAccessToken.id,
                    email: decodedAccessToken.email,
                    firstName: decodedAccessToken.firstName,
                    lastName: decodedAccessToken.lastName
                };
                localStorage.setItem('user',JSON.stringify(loggedInUser));
                props.updateState(true, () => {
                    setRedirection(true);
                });

            })
            .catch(() => {
                enqueueSnackbar('Error. Email and/or password incorrect.',{ autoHideDuration: 3000 })
            })


    }
    function navigate() {
        return(
            <Switch>
                <Redirect to="/dashboard"/>
            </Switch>
        );

    }
    return(
        <form className={classes.container} onSubmit={handleSubmit} >
            <h2>Tax Form Generator</h2>
            <div className={classes.registerInput}>
                <TextField
                    className={classes.input}
                    id="email"
                    name="email"
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    required
                    onChange={onChange}
                />
                <TextField
                    className={classes.input}
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                    onChange={onChange}
                />
                <div className={classes.links}>
                    <Link to="/register">Create account</Link>
                    <Link to="/register">Forgot password</Link>
                </div>
                <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    type="submit"
                >
                    Login
                </Button>
            </div>
            {redirection && navigate()}
        </form>
    );
}

export default (props: any) => (
    <AuthConsumer>
        {
            ({ updateState }) => (
                <>
                  <Login {...props} updateState={updateState} />
                </>
            )
        }
    </AuthConsumer>
);
