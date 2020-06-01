import styled from 'styled-components';

export const MenuBarUlTop = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background:  ${ (props) => props.color};
  z-index: 10;
  overflow: hidden;
  border-radius: 0 0 16px 16px;
  box-shadow: 2px 0 18px rgba(0, 0, 0, 0.26);
  @media (max-width: 768px) {
  height: 2em;
  width: 100%;
  }
`;

export const MenuBarLiTop = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  margin: 0.5em 1.5em 0;
  @media (max-width: 768px) {
    display: inline-block;
    float: left;
    top:0.1em;
  }
`;

export const MenuBarUl = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: ${ (props) => props.color};
  z-index: 9999;
  overflow: hidden;
  box-shadow: 2px 0 18px rgba(0, 0, 0, 0.26);
  @media (max-width: 768px) {
    height: 3.5em;
    width: 100%;
  }
`;

export const MenuBarLi = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  margin: 0.5em 1.5em 0;
  @media (max-width: 768px) {
    display: inline-block;
    float: left;
  }
`;
