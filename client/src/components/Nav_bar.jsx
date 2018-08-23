import React from 'react';
import '../styles/App.css';
import {
  Icon,
  Navbar,
  NavItem,
  SideNav,
  SideNavItem,
  Button
} from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SideNav options={{ closeOnClick: false }}>
      <SideNavItem
        userView
        user={{
          background: 'img/office.jpg',
          image: 'img/yuna.jpg',
          name: 'John Doe',
          email: 'jdandturk@gmail.com'
        }}
      />
      <SideNavItem href="#!icon" icon="cloud">
        First Link With Icon
      </SideNavItem>
      <SideNavItem href="#!second">Second Link</SideNavItem>
      <SideNavItem divider />
      <SideNavItem subheader>Subheader</SideNavItem>
      <SideNavItem waves href="#!third">
        Third Link With Waves
      </SideNavItem>
    </SideNav>
  );
};

const Navigation = () => {
  return (
    <div>
      <Navbar brand="logo" fixed right>
        <NavItem onClick={prevent_from_refresh}>
          <NavLink to="/">
            <Icon>home</Icon>
          </NavLink>
        </NavItem>
        <NavItem onClick={prevent_from_refresh}>
          <NavLink to="/messages">
            <Icon>message</Icon>
          </NavLink>
        </NavItem>
        <NavItem onClick={prevent_from_refresh}>
          <NavLink to="/blog">
            <Icon>dashboard</Icon>
          </NavLink>
        </NavItem>
        <NavItem onClick={prevent_from_refresh}>
          <NavLink to="/login">
            <Icon>exit_to_app</Icon>
          </NavLink>
        </NavItem>
        <NavItem onClick={prevent_from_refresh}>
          <NavLink to="/Register">
            <Icon>person_add</Icon>
          </NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
};

const prevent_from_refresh = e => {
  e.preventDefault();
};

export default Navigation;
