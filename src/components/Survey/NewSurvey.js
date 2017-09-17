import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import QuestionForm from './QuestionForm'
import renderField from '../shared/renderField'

const NewSurvey = props => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="surveyName"
        type="text"
        component={renderField}
        label="Survey Name"
      />
      <FieldArray name="questions" component={QuestionForm} />
      <div>
        <button type="submit">
          Submit
        </button>
        <button type="button" onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "survey",
  onSubmit: (values) => console.log(values)
})(NewSurvey);
