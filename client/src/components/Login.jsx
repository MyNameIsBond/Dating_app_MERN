import React from 'react';
import App from '../styles/App.css';
import { Field, reduxForm } from 'redux-form';
import { Icon } from 'react-materialize';
import { isNotEmail } from 'sane-email-validation';
const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (isNotEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
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
);

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="container login_style" style={App.something}>
      <h4>LOGIN</h4>
      <div className="login_inner">
        <form onSubmit={handleSubmit}>
          <Icon>mail</Icon>
          <Field
            name="email"
            type="email"
            component={renderField}
            label="Email"
          />
          <Icon>lock</Icon>
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Password"
          />
          <button
            type="submit"
            className="waves-effect waves-light btn"
            disabled={submitting}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'SyncValidationForm',
  validate,
  renderField
})(SyncValidationForm);
