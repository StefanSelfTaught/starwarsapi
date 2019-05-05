import React from 'react'
import ScrollToTop from 'react-scroll-up'
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import ArrowUpward from '@material-ui/icons/ArrowUpward' 

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
});


const ScrollUp = (props) => {
  const { classes } = props;
  return (
    <ScrollToTop style={{zIndex: 9999, bottom: 15, right: 20}} easing="easeInOutCirc" duration={350} showUnder={130}>
       <Fab color="primary" aria-label="Add" className={classes.fab}>
         <ArrowUpward />
       </Fab>
    </ScrollToTop>
  )
}

export default withStyles(styles)(ScrollUp)
