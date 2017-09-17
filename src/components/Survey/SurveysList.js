import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SurveyCard from './SurveyCard'

class SurveysList extends Component {
  static propTypes = {
    surveys: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className='mdc-list'>
        {this.props.surveys.map((survey) => (
          <SurveyCard survey={survey} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys
})

export default connect(mapStateToProps)(SurveysList)
