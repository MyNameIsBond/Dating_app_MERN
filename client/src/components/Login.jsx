import React from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';
import App from '../styles/App.css';

const Login = () => {
  return (
    <div className="container login_style" style={App.something}>
      <Row>
        <h2>Login</h2>
        <Input s={12} label="email" type="email" validate>
          <Icon>email</Icon>
        </Input>
        <Input s={12} label="Password" validate type="password">
          <Icon>vpn_key</Icon>
        </Input>
      </Row>
      <Row>
        <Button waves="light">Login</Button>
        <p>or</p>
        <div className="other_logins">
          <Button className="red" waves="light">
            Google +
          </Button>
          <Button className="blue" waves="light">
            facebook
          </Button>
          <Button className="blue" waves="light">
            Twitter
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default Login;
