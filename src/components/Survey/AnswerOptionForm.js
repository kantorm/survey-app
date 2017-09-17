import React from 'react'
import {Field} from 'redux-form'

import renderField from '../shared/renderField'

export default ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Answer Option
      </button>
    </li>
    {fields.map((answerOption, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}
        />
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
