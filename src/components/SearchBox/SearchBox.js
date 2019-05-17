import React from 'react'
import TextField from '@material-ui/core/TextField';
import './SearchBox.css'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: 35,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',   
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'black',
    },
  },
  cssFocused: {
    color: 'black'
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'black',
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: 'black',
    },
  },
  notchedOutline: {
    color: 'black'
  },
});

const SearchBox = props => {
  
  const { classes } = props;
  return (
    <form className={`${classes.container} ${classes.textField}`} noValidate autoComplete="off">
       <TextField
          onChange={props.searchChange}
          style={{backgroundColor: '#F0F0F0'}}
          className={classes.margin}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          label="Search Characters..."
          variant="outlined"
          id="custom-css-outlined-input"
       />
    </form>
  )
}

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBox);
