import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NewSurvey from '../Survey/NewSurvey'
import SurveysList from '../Survey/SurveysList'
import Navbar from "./Navbar";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route component={SurveysList} exact path='/' />
            <Route component={NewSurvey} exact path='/new' />
          </div>
        </Router>
      </div>
    )
  }
}
