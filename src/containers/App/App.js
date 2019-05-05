import React, { Component, Fragment } from 'react'
import './App.css'
import CardsList from '../../components/CardsList'
import SearchBox from '../../components/SearchBox/SearchBox'
import Typography from '@material-ui/core/Typography';
import ScrollUp from '../../components/ScrollUp';

class App extends Component {
  state = {
    people: [],
    searchField: ''
  }

  componentDidMount() {
    const urls = [
      'https://swapi.co/api/people/',
			'https://swapi.co/api/people/?page=2', 
			'https://swapi.co/api/people/?page=3',
			'https://swapi.co/api/people/?page=4',
			'https://swapi.co/api/people/?page=5',
    ]
    // const firstUrl = fetch('https://swapi.co/api/people/').then(res => res.json())
    // const secondUrl = fetch('https://swapi.co/api/people/?page=2').then(res => res.json())
    //  Promise.all([firstUrl, secondUrl])
    //   .then(data => data.map(url => {
    //     console.log(url.results)
    //     this.setState({
    //       people:url.results
    //     })
    //   }))

    Promise.all(urls.map(async url => {
      const response = await fetch(url);
      const morePlanets = await response.json();
      let combinedArrayOfPlanets = this.state.people;
      combinedArrayOfPlanets.push(morePlanets.results);
      
      let sortedArrayOfPlanets = combinedArrayOfPlanets
        .flat()
        .sort((a, b) => a.name.localeCompare(b.name));
      
      this.setState({people: sortedArrayOfPlanets})
    }))
    .catch(error => 
      alert('Something went wrong:', error)
    );
  }

  render() {
    return (
      <Fragment>
        <ScrollUp />
        <Typography style={{fontFamily:'StarWars', color:'#f0f0f0', fontSize: 80, marginTop: 40}} align='center' variant="h1" gutterBottom>
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
        <SearchBox />
        <CardsList cards={this.state.people}/>
      </Fragment>
      
    )
  }
}

export default App

