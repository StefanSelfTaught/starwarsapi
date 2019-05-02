import React, { Component } from 'react'
import Card from './Card';

class App extends Component {
  state = {
    items: ''
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/1/')
      .then(response => response.json())
      .then(data => this.setState({ items: data.name }))
  }

  render() {
    return (
      <div>
        <Card name={this.state.items} />
        <Card name={this.state.items} />
      </div>
    )
  }
}

export default App

