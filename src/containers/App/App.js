import React, {Component, Fragment} from 'react'
import './App.css'
import CardsList from '../../components/CardsList'
import ScrollUp from '../../components/ScrollUp';
import Titles from '../../components/Titles'
import Spinner from '../../components/Spinner/Spinner'
import AppBar from '../../components/AppBar'

class App extends Component {
  state = {
    people: [],
    searchField: '',
    loading: true
  }

  componentDidMount() {
    const urls = [
      'https://swapi.co/api/people/',
			'https://swapi.co/api/people/?page=2', 
			'https://swapi.co/api/people/?page=3',
			'https://swapi.co/api/people/?page=4',
      'https://swapi.co/api/people/?page=5',
      'https://swapi.co/api/people/?page=6',
      'https://swapi.co/api/people/?page=7',
      'https://swapi.co/api/people/?page=8',
    ]

    Promise.all(urls.map(async url => {
      const response = await fetch(url);
      const morePlanets = await response.json();
      let combinedArrayOfPlanets = this.state.people;
      combinedArrayOfPlanets.push(morePlanets.results);
      
      let sortedArrayOfPlanets = combinedArrayOfPlanets
        .flat()
        .sort((a, b) => a.name.localeCompare(b.name));
      
      this.setState({people: sortedArrayOfPlanets, loading: false})
    }))
    .catch(error =>   
      alert('Something went wrong:', error)
    );
  }

  handleSearch = event => {
    this.setState({
      searchField: event.target.value
    })
  }

  render() {
    const filteredArr = this.state.people.filter(people => {
      return people.name
      .toLowerCase()
      .includes(this.state.searchField.toLowerCase())
    })

    let cards = <CardsList people={filteredArr}/>
    if(this.state.loading){
      cards = <Spinner />
    }
    return (
      <Fragment>
        <ScrollUp />
        <AppBar searchChange={this.handleSearch}/>
        <Titles />
        {cards}
      </Fragment>
      
    )
  }
}

export default App

