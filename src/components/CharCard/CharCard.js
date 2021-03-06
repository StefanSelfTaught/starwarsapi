import React from 'react';
import './CharCard.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 345,
    transition: 'all 0.15s ease',
    margin: 12,
    opacity: 0.85,
    boxShadow: '10px 10px 10px 1px rgba(0,0,0,0.21)',
    '&:hover': {
      transform: 'scale(1.05)',
      opacity: 0.90,
    }
  },
    typography:{
      fontSize: 17.5,
  }
};

const CharCard = props => {
    const { classes } = props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography style={{borderBottom: '0.5px solid grey', padding: 5}} gutterBottom variant='h5' align='center' component='h5'>
              <strong>{props.name}</strong>
            </Typography>
            <Typography className={classes.typography} align='center'>
              Height: {props.height}  
            </Typography>
            <Typography className={classes.typography} align='center'>
              Mass: {props.mass} 
            </Typography>
            <Typography className={classes.typography} align='center'>
              Hair Color: {props.hair_color}  
            </Typography>
            <Typography className={classes.typography} align='center'>
              Skin Color: {props.skin_color} 
            </Typography>
            <Typography className={classes.typography} align='center'>
              Birth Year: {props.birth_year} 
            </Typography>
            <Typography className={classes.typography} align='center'>
              Eye Color: {props.eye_color} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{margin: 'auto'}} size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
}

CharCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CharCard);
