import React from 'react'
import MediaCard from './MediaCard'
import Grid from '@material-ui/core/Grid';

const CardsList = ({ cards }) => {
  
  return (
      <Grid container direction="row" justify="space-evenly">
        { cards.map(({name, height, mass, hair_color, skin_color, birth_year, i})  => {
          return ( <MediaCard 
            key={i}
            name={name}
            height={height} 
            mass={mass} 
            hair_color={hair_color}
            skin_color={skin_color}
            birth_year={birth_year}  
            />
           )
         }) 
        }
      </Grid>
  )
}

export default CardsList
