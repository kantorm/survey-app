import React from 'react'

export default ({ input, label, type }) => (
  <div className='mdc-textfield'>
    <div>
      <input {...input} type={type} placeholder={label} className='mdc-textfield__input'/>
    </div>
  </div>
);
