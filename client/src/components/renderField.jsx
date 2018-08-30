import React from 'react'
import { Icon } from 'react-materialize'

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && (
          <div className="error_div">
            <Icon>report</Icon>
            <span>{error}</span>
          </div>
        )) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)
