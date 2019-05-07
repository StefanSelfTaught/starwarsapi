import React from 'react'
import Typography from '@material-ui/core/Typography';

const Titles = () => {
  return (
      <div>
        <Typography 
            style={{fontFamily:'StarWars', color:'#f0f0f0', fontSize: 80, marginTop: 40}} 
            align='center' 
            variant="h1" 
            gutterBottom>
            Star Wars
        </Typography>
        <Typography style={{
          fontFamily:'StarWars2', 
          color:'black', 
          fontSize: 45, 
          marginBottom: 105,
          textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'
          }} 
          align='center' variant="h1" gutterBottom>
          The Characters
        </Typography>
    </div>
  )
}

export default Titles
