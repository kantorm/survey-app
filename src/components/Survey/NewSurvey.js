import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";

import QuestionForm from './QuestionForm'
import renderField from '../shared/renderField'
import { createSurvey } from '../../store/surveys/actions'

const NewSurvey = props => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2 className='mdc-typography--headline'>Survey Form</h2>
      <Field
        name="name"
        type="text"
        component={renderField}
        label="Survey Name"
      />
      <FieldArray name="questions" component={QuestionForm} />
      <div>
        <button type="submit" className='mdc-button mdc-button--raised mdc-button--primary'>
          Submit
        </button>
        <button type="button" className='mdc-button mdc-button--raised' onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "survey",
  onSubmit: (values, dispatch) => dispatch(createSurvey(values))
})(NewSurvey);
