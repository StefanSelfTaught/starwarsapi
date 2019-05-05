import React from 'react'
import TextField from '@material-ui/core/TextField';
import './SearchBox.css'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: 35,
    backgroundColor: '#CDECFF',
    opacity: 0.95,
    outline: 'none'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const SearchBox = props => {  
  const { classes } = props;
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
          id="outlined-with-placeholder search"
          label="Search Characters..."
          placeholder="Search..."
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
    </form>
  )
}

export default withStyles(styles)(SearchBox);
