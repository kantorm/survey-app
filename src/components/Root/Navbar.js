import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='App-header'>
        <Link to='/'>Surveys</Link>
        <Link to='/new'>New Survey</Link>
      </div>
    )
  }
}
