import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { auth } from '../shared/auth';
import { useAuthValue } from '../shared/auth-context';

const useStyles = makeStyles({
  header: {
    padding: '1rem',
    display: 'flex',
    backgroundColor: 'red'
  },
  spacer: {
    flexGrow: 1
  },
  navLinks: {
    textDecoration: 'none'
  },
  btn: {
    color: 'white'
  }
});

const Header: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const { user, setLoggedInUser } = useAuthValue();

  function handleClick(event: any) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
    auth.logout();
    setLoggedInUser(null);
    history.push('/login');
  }

  return (
    <div className={classes.header}>
      <NavLink className={classes.navLinks} to="/dashboard">
        <Button size="small" className={classes.btn}>
          Dashboard
        </Button>
      </NavLink>
      <NavLink className={classes.navLinks} to="/generate-form">
        <Button size="small" className={classes.btn}>
          Generate Form
        </Button>
      </NavLink>
      <NavLink className={classes.navLinks} to="/settings">
        <Button size="small" className={classes.btn}>
          Settings
        </Button>
      </NavLink>
      <div className={classes.spacer} />
      <div>
        {
          user && (
              <>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.btn}
                >
                  {user && user.email}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </>
          )
        }
      </div>
    </div>
  );
};

export default withRouter(Header);
