import React from 'react'
import {Field} from 'redux-form'

import renderField from '../shared/renderField'

export default ({ fields }) => (
  <ul>
    <li>
      <button type="button" className='mdc-button mdc-button--raised' onClick={() => fields.push()}>
        Add Answer Option
      </button>
    </li>
    {fields.map((answerOption, index) => (
      <li key={index}>
        <button
          className='mdc-button mdc-button--raised'
          type="button"
          title="Remove Answer Option"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
        <Field
          name={answerOption}
          type="text"
          component={renderField}
          label={`Answer Option #${index + 1}`}
        />
      </li>
    ))}
  </ul>
);
