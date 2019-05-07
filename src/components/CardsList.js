import React from 'react'
import MediaCard from './MediaCard/MediaCard'
import Grid from '@material-ui/core/Grid';

const CardsList = ({ people }) => {
  
  return (
      <Grid container direction="row" justify="center" alignItems="center">
        {people.map(({name, height, mass, hair_color, skin_color, birth_year})  => {
          return ( 
          <Grid item xs={8} sm={5} md={4} lg={3} xl={2}>
            <MediaCard 
              key={name}
              name={name}
              height={height}
              mass={mass} 
              hair_color={hair_color}
              skin_color={skin_color}
              birth_year={birth_year}  
            />
          </Grid> 
           )
         }) 
        }
      </Grid>
  )
}

export default CardsList
