import React from 'react';
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

const Register = () => {
  return (
    <div>
      <div className="container login_style">
        <Row>
          <h2>Register</h2>
          <small>* are mendatory</small>
          <br />
          <Row>
            <Input s={12} label="Username*" validate>
              <Icon>account_circle</Icon>
            </Input>
          </Row>
          <Row>
            <Input s={12} label="email*" type="email" validate>
              <Icon>email</Icon>
            </Input>
          </Row>
          <Row>
            <Input s={12} label="password*" type="password" validate>
              <Icon>vpn_key</Icon>
            </Input>
          </Row>
          <Row>
            <Input s={12} label="repeat password*" type="password" validate>
              <Icon>vpn_key</Icon>
            </Input>
          </Row>
          <Row>
            <Input
              s={12}
              name="on"
              type="date"
              label="Date of Birth*"
              icon="date_range"
              onChange={function(e, value) {}}
            />
          </Row>
          <Row>
            <Input
              s={12}
              type="select"
              label="Select you sex"
              icon="wc"
              defaultValue="2"
            >
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Gay</option>
            </Input>
          </Row>
        </Row>

        <Row>
          <small>What gender you want your matches to be?*</small>
          <Input name="group1" type="checkbox" value="Males" label="Males" />
          <Input
            name="group1"
            type="checkbox"
            value="Females"
            label="Females"
          />
          <Input name="group1" type="checkbox" value="Gay" label="Gay" />
        </Row>
        <Button waves="light"> Register </Button>
      </div>
      <div>
        <Advertisement1 />
      </div>
    </div>
  );
};

export default Register;
