import axios from "axios";
import { types } from "./";

const setSurveys = (surveys) => ({
  type: types.GET_SURVEYS,
  payload: surveys
});

const addSurvey = (survey) => ({
  type: types.ADD_SURVEY,
  payload: survey
});

const removeSurvey = (surveyId) => ({
  type: types.REMOVE_SURVEY,
  payload: surveyId
})

export const getSurveys = () => (dispatch) => {
  axios.get("http://localhost:8080/v1/surveys")
    .then((response) => dispatch(setSurveys(response.data.surveys)))
}

export const createSurvey = (params) => (dispatch) => {
  axios.post("http://localhost:8080/v1/surveys", { params })
    .then((response) => dispatch(addSurvey(response.data.survey)))
}

export const deleteSurvey = (surveyId) => (dispatch) => {
  axios.delete(`http://localhost:8080/v1/surveys/${surveyId}`)
    .then(() => dispatch(removeSurvey(surveyId)))
}
