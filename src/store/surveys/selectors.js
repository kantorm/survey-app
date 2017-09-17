import { find } from 'lodash'

export const getSurveyById = (surveys, surveyId) => find(surveys, {_id: surveyId})
