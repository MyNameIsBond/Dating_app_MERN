import React from 'react'
import { Icon,Row,Input } from 'react-materialize'

export const renderField = ({ input, label, type, meta: { touched, error } }) => (
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
          (error && <span>{error}</span>))}
    </div>
  </div>
)

export const renderDateTimePicker = ({ input: { onChange, value }, meta: { touched, error } }) => (
  <Row>
    <label>Date of Birth</label>
    <input
    value={!value ? null : value}
      type="date"
      name="date"
      onChange={(e, value) => {
        console.log(e.target.value)
      }}
    />
    {touched &&
      ((error && (
        <div className="error_div">
          <Icon>report</Icon>
          <span>{error}</span>
        </div>
      )) ||
        (error && <span>{error}</span>))}
  </Row>
)

export const renderRadioButton = ({ input, ...rest,meta: { touched, error } }) => (
  <Row>
    <Input
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
      s={12}
      type="radio"
      value="male"
      label="Male"
    />
    <Input
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
      s={12}
      type="radio"
      value="female"
      label="Female"
    />
    {touched &&
      ((error && (
        <div className="error_div">
          <Icon>report</Icon>
          <span>{error}</span>
        </div>
      )) ||
        (error && <span>{error}</span>))}
  </Row>
)