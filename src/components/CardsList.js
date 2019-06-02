import React from 'react'
import CharCard from './CharCard/CharCard'
import Grid from '@material-ui/core/Grid';

const CardsList = props => {
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            {props.people.map(({name, height, mass, hair_color, skin_color, birth_year, eye_color})  => {
              return ( 
              <Grid key={name} item xs={8} sm={5} md={4} lg={3} xl={2}>
                <CharCard 
                  name={name}
                  height={height}
                  mass={mass} 
                  hair_color={hair_color}
                  skin_color={skin_color}
                  birth_year={birth_year}
                  eye_color={eye_color}   
                />
              </Grid> 
              )
            }) 
          }
        </Grid>
    )
}

export default CardsList
