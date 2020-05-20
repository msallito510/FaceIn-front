import styled from 'styled-components';
import { Link } from "react-router-dom";


export const TitleB = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1F1F1F;
`;

export const TitleW = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;

export const TitleCardW = styled.h1`
  position: relative;
  text-align: center;
  color: #fff;
  bottom: 4.5em;
`;

export const TitleCardB = styled.h1`
  position: relative;
  text-align: center;
  color: #1F1F1F;
  bottom: 4.5em;
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
export const StyledLink = styled(Link)`
  text-decoration: none !important;
`;

export const HomeCard = styled.div`
  height: 9em;
`;

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
  background: #E3E5F3;
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

export const GeneralBackground = styled.div`
  background: #fff;
  top: 17rem;
  position: absolute;
  width: 100%;
  padding: 1em 0;
  text-align: center;
  border-radius: 20px;
  `;

export const HomeBackground = styled.div`
  background-image: url('https://res.cloudinary.com/marcesallito/image/upload/v1589976758/face-in/home-bcn_ifptga.jpg');
  width: 100%;
  height: 376px;
  ackground-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    top: 0;
    position: absolute;
`;

export const HomeAllEvents = styled.div`
  background-image: url('https://res.cloudinary.com/marcesallito/image/upload/v1589977262/face-in/tremblant-beach-party-l_j1ck99.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 20px;
  height: 136px;
`;

export const HomeWhatsHot = styled.div`
  border: 1px solid #000;
  background-image: url('https://res.cloudinary.com/marcesallito/image/upload/v1589976874/face-in/go-party-like-a-vip-in-barcelona-party-955x508_fhikm8.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 20px;
  height: 136px;
`;

export const HomeUserLikes = styled.div`  
  background-image: url('https://res.cloudinary.com/marcesallito/image/upload/v1589977561/face-in/DJ-Beach-Bash-1000x500_xqiiiu.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 20px;
  height: 136px;
`;

