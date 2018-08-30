import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { isNotEmail } from 'sane-email-validation';
import { Row, Input, Icon, Button } from 'react-materialize';

const Ad_card = () => {
  return (
    <div>
      <Icon>account_circle</Icon>
      <h4>Something cool</h4>
    </div>
  );
};

const Ad_card2 = () => {
  return (
    <div>
      <Icon>account_circle</Icon>
      <h4>Something cool</h4>
    </div>
  );
};

const Ad_card3 = () => {
  return (
    <div>
      <Icon>account_circle</Icon>
      <h4>Something cool</h4>
    </div>
  );
};

const Advertisement1 = () => {
  return (
    <div className="ad_card">
      <ul>
        <li>
          <Ad_card />
        </li>
        <li>
          <Ad_card2 />
        </li>
        <li>
          <Ad_card3 />
        </li>
      </ul>
    </div>
  );
};

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (isNotEmail(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length <= 7) {
    errors.password = 'Password should be more than 8 characters';
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

const Regiser = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="password"
      />
      <Field
        name="password2"
        type="password"
        component={renderField}
        label="Repeat Password"
      />
      <button type="submit" disabled={submitting}>
        Register
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  renderField // <--- warning function given to redux-form
})(Regiser);
