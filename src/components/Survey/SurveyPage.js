import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import { getSurveyById } from '../../store/surveys/selectors'

class SurveyPage extends Component {
  static propTypes = {
    survey: PropTypes.object,
  }

  render() {
    if (isEmpty(this.props.survey)) return <div>Loading...</div>
    return (
      <div>
        <h1>{this.props.survey.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ surveys }, ownProps) => ({
  survey: getSurveyById(surveys, ownProps.match.params.surveyId)
})

export default connect(mapStateToProps)(SurveyPage)
