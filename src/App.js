import React, { useState } from "react";
import styled from "styled-components";
import transition from "styled-transition-group";
import { useToggle } from "./useToggle";

const Container = styled.div`
  position: relative;
`;
const Button = styled.div`
  position: relative;
  z-index: 2;
  width: 120px;
  height: 50px;
  border-radius: 12.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transition: background-color 350ms;
`;

const Menu = transition.div`
  position: abosolute;
  top: 45px;
  background-color: orange;
  z-index: 1;
  padding: 0 20px;
  overflow: hidden;
  width: 90px;
  border-radius: 12.5px;

  &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  padding: 5px 0;
`;

const App = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [isActive, toggleActive] = useState(false);

  return (
    <Container>
      <Button onClick={() => toggleActive(!isActive)}>Button</Button>

      <Menu in={isActive} timeout={900} unmountExit>
        <List>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Contact</Item>
        </List>
      </Menu>
    </Container>
  );
};

export default App;
