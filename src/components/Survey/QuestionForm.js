import React from 'react'
import {Field, FieldArray} from 'redux-form'

import renderField from '../shared/renderField'
import AnswerOptionForm from './AnswerOptionForm'

export default ({ fields }) => (
  <ul>
    <li>
      <button className='mdc-button  mdc-button--raised' type="button" onClick={() => fields.push({})}>
        Add Question
      </button>
    </li>
    {fields.map((question, index) => (
      <li key={index}>
        <button
          className='mdc-button mdc-button--raised'
          type="button"
          title="Remove Question"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
        <h4 className='mdc-typography--headline'>Question #{index + 1}</h4>
        <Field
          name={`${question}.questionName`}
          type="text"
          component={renderField}
          label="Question Name"
        />
        <Field
          name={`${question}.fieldType`}
          component="select"
          label="Last Name"
          className='mdc-select'
        >
          <option value="" selected>Field type</option>
          <option value='text'>text</option>
          <option value='checkbox'>checkbox</option>
          <option value='radio'>radio</option>
        </Field>
        <FieldArray name={`${question}.answerOptions`} component={AnswerOptionForm} />
      </li>
    ))}
  </ul>
);
