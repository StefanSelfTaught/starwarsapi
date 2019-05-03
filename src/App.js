import React, { Component } from 'react'
import CardsList from './CardsList'

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
			'https://swapi.co/api/ppeople?page=6',
			'https://swapi.co/api/people/?page=7'
    ]

    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => this.setState({ people: data.results }))
  }

  render() {
    return (
      <CardsList cards={this.state.people}/>
    )
  }
}

export default App

