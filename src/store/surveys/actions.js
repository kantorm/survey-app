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

export const getSurveys = () => (dispatch) => {
  axios.get("http://localhost:8080/v1/surveys")
    .then((response) => dispatch(setSurveys(response.data.groups)))
}

export const createSurvey = (params) => (dispatch) => {
  debugger;
  axios.post("http://localhost:8080/v1/surveys", { params })
    .then((response) => dispatch(addSurvey(response.data.survey)))
}
