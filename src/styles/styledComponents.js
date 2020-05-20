import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1F1F1F;
`;

export const Title3 = styled.h3`
  font-size: 1.1em;
  text-align: center;
  color: #1F1F1F;
`;

export const Wrapper = styled.section`
  padding: 4em;
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 8px 8px 50px #000;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  outline: none;
  height: 30px;
  font-size: 16px;
  opacity: 1;
  color: #61637B;
`;

export const Submit = styled.input.attrs({
  type: 'submit',
  value: 'Submit'
})`
  background: #F57873;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`

export const ButtonPLeft = styled.a`
  float: left;
`;

export const ButtonPRight = styled.a`
  float: right;
`;

export const Span = styled.span`
  padding: 1em;
  font-size: 14px;
  text-decoration: none !important;
  opacity: 0.8;
  color:#61637B
`;

export const MenuBarUl = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: #fff;
  z-index: 10;
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

