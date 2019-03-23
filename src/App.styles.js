import styled from "styled-components";
import transition from "styled-transition-group";

export const Container = styled.div`
  position: relative;
`;

export const Toggler = styled.button`
  position: relative;
  z-index: 2;
  width: 120px;
  height: 40px;
  background-color: ${props => (props.active ? "#ffcf40" : "#ffbf00")};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background-color 350ms;
`;

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 5px 0;
`;

export const Menu = transition.div`
  position: absolute;
  top: 45px;
  z-index: 1;
  box-sizing: border-box;
  width: 200px;
  padding: 0 20px;
  overflow: hidden;
  background-color: #ffdc73;
  border-radius: 5px;

  &:enter {
    width: 120px;

    color: transparent;
    background-color: #ffbf00;
  }

  &:enter-active {
    top: 45px;
    width: 200px;
    max-height: 200px;
    color: black;
    background-color: #ffdc73;
    transition: all 350ms;
  }

  &:exit {
    top: 45px;
    width: 200px;
    max-height: 200px;
    color: black;
    background-color: #ffdc73;
  }

  &:exit-active {
    width: 120px;

    color: transparent;
    background-color: #ffbf00;
    transition: all 350ms;
  }
`;
