import styled from 'styled-components';

export const GeneralContainer = styled.div`
  text-align: center;
  position: relative;
  top: 2em;
`;

export const GeneralBackground = styled.div`
  background: ${props => props.background};
  overflow: hidden;
  overflow-y:scroll;
  bottom:1.5em;
  top: 20rem;
  position: absolute;
  width: 100%;
  padding: 1em 0 2em;
  text-align: center;
  border-radius: 20px;
  `;

export const TitleH1 = styled.h1`
  font-size: 1.7em;
  text-align: center;
  color: #F9F9F9;
`;

export const TitleH2 = styled.h2`
  position: relative;
  bottom: 2em;
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.color};
`;

export const TitleH3 = styled.h3`
  position: relative;
  ${'' /* width: 6.5em; */}
  float: right;
  bottom: 2em;
  font-size: 1em;
  text-align: left;
  color: ${props => props.color};
`;

export const Submit = styled.input.attrs({
  type: 'submit'
})`
  background:${ (props) => props.background};
  color:${ (props) => props.color};
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
`;

export const Button = styled.button`
  background:${ (props) => props.background};
  color:${ (props) => props.color};
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
`;