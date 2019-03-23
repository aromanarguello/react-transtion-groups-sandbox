import React from "react";
import { useToggle } from "./useToggle";
import { Container, Toggler, Menu, List, ListItem } from "./App.styles";

const App = () => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <Container>
      <Toggler active={open} onClick={toggleOpen}>
        Menu
      </Toggler>
      <Menu in={open} timeout={350} unmountOnExit>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Profile</ListItem>
          <ListItem>Favorites</ListItem>
          <ListItem>Sign out</ListItem>
        </List>
      </Menu>
    </Container>
  );
};
export default App;
