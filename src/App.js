import React, { useState } from "react";
import styled from "styled-components";
import transition from "styled-transition-group";

const Button = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 12.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const List = transition.ul`
  background-color: orange;
  width: 90px;
`;

const Item = styled.li`
  list-style: none;
`;

const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsActive(!isActive)}>Button</Button>
      <List in={isActive} timeout={350} unmountOnExit>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Contact</Item>
      </List>
    </div>
  );
};

export default App;
