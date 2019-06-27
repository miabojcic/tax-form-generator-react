import React, { ChangeEvent, FormEvent, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Credentials } from './credentials';
import { useSnackbar } from 'notistack';
import { AuthConsumer } from '../shared/auth-context';
import { http } from '../shared/http';
import { LoginResponse } from './login-response';
import { auth } from '../shared/auth';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px',
    alignItems: 'center'
  },
  registerInput: {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px',
    alignItems: 'center'
  },
  input: {
    margin: '10px'
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0 30px'
  }
});

interface LoginProps extends RouteComponentProps {
  updateState: (x: boolean, callback?: () => void) => void;
}

const Login: React.FC<LoginProps> = props => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const [credentials, setCredentials] = useState<Credentials | undefined>(
    undefined
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    } as Credentials);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    http
      .post<LoginResponse>('api/auth', credentials)
      .then(response => {
        auth.storeSessionData(response.data);
        props.updateState(true, () => {
          props.history.push('/dashboard');
        });
      })
      .catch(() => {
        enqueueSnackbar('Error. Email and/or password incorrect.', {
          autoHideDuration: 3000
        });
      });
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <h2>Tax Form Generator</h2>
      <div className={classes.registerInput}>
        <TextField
          className={classes.input}
          name="email"
          label="E-mail"
          variant="outlined"
          type="email"
          required
          onChange={onChange}
        />
        <TextField
          className={classes.input}
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
    </form>
  );
};

export default (props: RouteComponentProps) => (
  <AuthConsumer>
    {({ updateState }) => (
      <>
        <Login {...props} updateState={updateState} />
      </>
    )}
  </AuthConsumer>
);
