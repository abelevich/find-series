import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default ({onSubmit}) => {
  const [username, setUsername] = useState(undefined);
  const [apikey, setApikey] = useState(undefined);
  const [userkey, setUserkey] = useState(undefined);

  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }

  const handleApiKeyChange = event => {
    setApikey(event.target.value)
  }

  const handleUserKeyChange = event => {
    setUserkey(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({
      username,
      apikey,
      userkey
    })
  }

  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={handleUsernameChange}
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="api-key"
          label="Api Key"
          variant="outlined"
          onChange={handleApiKeyChange}
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="user-key"
          label="User Key"
          variant="outlined"
          onChange={handleUserKeyChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};
