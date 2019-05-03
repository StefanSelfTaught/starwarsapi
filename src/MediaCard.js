import React from 'react';
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
    margin: 12, 
  },
};

const MediaCard = props => {
    const { classes } = props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography style={{borderBottom: '0.5px solid grey', padding: 5}} gutterBottom variant='h5' align='center' component='h5'>
              {props.name}
            </Typography>
            <Typography align='center' variant="p">
              Height: {props.height}  
            </Typography>
            <Typography align='center' variant="p">
              Mass: {props.mass} 
            </Typography>
            <Typography align='center' variant="p">
              Hair Color: {props.hair_color}  
            </Typography>
            <Typography align='center' variant="p">
              Skin Color: {props.skin_color} 
            </Typography>
            <Typography align='center' variant="p">
              Birth Year: {props.birth_year} 
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

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
