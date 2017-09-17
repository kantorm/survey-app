import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import NewSurvey from '../Survey/NewSurvey'
import SurveysList from '../Survey/SurveysList'
import SurveyPage from '../Survey/SurveyPage'
import Navbar from "./Navbar";
import {getSurveys} from '../../store/surveys/actions';

class Routes extends Component {
  componentWillMount = () => {
    this.props.getSurveys();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route component={SurveysList} exact path='/' />
            <Route component={NewSurvey} exact path='/new' />
            <Route component={SurveyPage} path='/surveys/:surveyId' />
          </div>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getSurveys
}

export default connect(null, mapDispatchToProps)(Routes)
