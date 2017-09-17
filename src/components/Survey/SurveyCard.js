import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteSurvey } from '../../store/surveys/actions'

class SurveyCard extends Component {
  static propTypes = {
    survey: PropTypes.object.isRequired,
    deleteSurvey: PropTypes.func.isRequired,
  }

  render() {
    const { survey, deleteSurvey } = this.props
    return (
      <div className='mdc-list-item' key={survey._id}>
        <h1 className="mdc-card__title mdc-card__title--large">{survey.name}</h1>
        <Link to={`/surveys/${survey._id}`} className='mdc-button mdc-button--raised'>View</Link>
        <button className='mdc-button mdc-button--raised' onClick={() => deleteSurvey(survey._id)}>Remove</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  deleteSurvey
}

export default connect(null, mapDispatchToProps)(SurveyCard)
