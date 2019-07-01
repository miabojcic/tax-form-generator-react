import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TextField, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { UserRegistration } from './user-registration';
import { RouteComponentProps } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { http } from '../shared/http';

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
  }
});

export const Registration: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();

  const [state, setState] = useState<UserRegistration>({
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const { enqueueSnackbar } = useSnackbar();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value } as UserRegistration);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    http
      .post('api/accounts', state)
      .then(() => {
        enqueueSnackbar('Registered successfully.', { autoHideDuration: 1000 });
        history.push('/login');
      })
      .catch(() => {
        enqueueSnackbar('Error. Failed to add user.', {
          autoHideDuration: 1000
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
          value={state.email}
          label="E-mail"
          variant="outlined"
          type="email"
          required
          onChange={onChange}
        />
        <TextField
          className={classes.input}
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
    </form>
  );
};
