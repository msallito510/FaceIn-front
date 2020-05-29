import styled from 'styled-components';
import { Link } from "react-router-dom";

export const TitleDh1 = styled.h1`
  font-size: 1.7em;
  text-align: center;
  color: #1F1F1F;
`;

export const TitleLh1 = styled.h1`
  font-size: 1.7em;
  text-align: center;
  color: #fff;
`;

export const TitleEventsLh1 = styled.h1`
  position: absolute;
  left: 30%;
  right: 30%;
  top: 40%;
  font-size: 1.7em;
  text-align: center;
  color: #fff;
`;

export const TitleCardLh1 = styled.h1`
  position: relative;
  font-size: 1.7em;
  text-align: center;
  color: #fff;
  bottom: 4.5em;
`;

export const TitleCardDh1 = styled.h1`
  position: relative;
  font-size: 1.7em;
  text-align: center;
  color: #1F1F1F;
  bottom: 4.5em;
`;

export const BoldTitleCardLh1 = styled.h1`
  opacity: 1;
  position: relative; 
  font-size: 2em;
  text-align: center;
  ${'' /* color: ${ (props) => props.color}; */}
  color: #fff;
  bottom: 3.5em;
  font-weight: normal;
  letter-spacing:3px;
  text-shadow:1px 0 0 currentColor,2px 0 0 currentColor,3px 0 0 currentColor;
`;

export const BoldTitleCardDh1 = styled.h1`
  opacity: 1;
  position: relative;  
  font-size: 2em;
  text-align: center;
  color: #1F1F1F;
  bottom: 3.5em;
  font-weight: normal;
  letter-spacing:3px;
  text-shadow:1px 0 0 currentColor,2px 0 0 currentColor,3px 0 0 currentColor;
`;

export const TitleEventCardLh1 = styled.h3`
  position: relative;
  top: 7em;
  opacity: 1;
  padding: 0.3em;
  font-weight: 900;
  font-size: 1em;
  text-align: center;
  color: #1F1F1F;
  width: -webkit-fill-available;
`;

export const TimeEventCardLh3 = styled.h3`  
position: relative;
  top: 7.5em;
  font-weight: 200;
  font-size: 0.8em;
  padding: 0.2em;
  line-height: 13px;
  width: -webkit-fill-available;
`;

export const TitleDh2Secundary = styled.h2`
  position: absolute;
  font-size: 1.5em;
  text-align: center;
  color: #1F1F1F;
`;

export const EventCardWrapper = styled.section`
  padding: 4em;
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 8px 8px 50px #000;
`;

export const FormWrapper = styled.section`
  padding: 1em;
  color: #000;  
`;

export const InputDark = styled.input`
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
  height: 30px;
  font-size: 16px;
  opacity: 1;
  color: #61637B;
`;

export const InputLight = styled.input`
  border: none;
  border-bottom: 1px solid #dff;
  border-radius: 6px;
  outline: none;
  height: 30px;
  font-size: 16px;
  opacity: 1;
  color: #fff;
`;

export const ContinerAlineCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinkDivPrimary = styled.div`
  height: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F57873;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 6em;
  border-radius: 5px;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`;

export const LinkDivTertiary = styled.div`
  height: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  color: #1F1F1F;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 6em;
  border-radius: 5px;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`;

export const StyledLinkDark = styled(Link)`
  text-decoration: none !important;
  color: #1F1F1F
`;

export const StyledLinkLight = styled(Link)`
  text-decoration: none !important;
  color:#fff;
`;

export const CardContainer = styled.div`
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

export const SearchBackground = styled.div`
  background: #fff;
  overflow: hidden;
  overflow-y: scroll;
  bottom: 0em;
  top: 10rem;
  position: absolute;
  width: 100%;
  padding: 1em 0 4em;
  text-align: center;
  border-radius: 20px;
  `;

export const HomeImageBackground = styled.div`
  background-image: url('https://res.cloudinary.com/marcesallito/image/upload/v1589976758/face-in/home-bcn_ifptga.jpg');
  width: 100%;
  height: 376px;
  ackground-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  top: 1.2em;
  position: absolute;
`;

export const HomeAllEvents = styled.div`  
  background-image: url('https://res.cloudinary.com/marcesallito/image/upload/v1590453133/AllEvents.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 20px;
  height: 136px;
`;

export const HomeWhatsHot = styled.div`  
  background-image: url('https://res.cloudinary.com/marcesallito/image/upload/v1590453123/WhatIsHot.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 20px;
  height: 136px;
`;

export const HomeUserLikes = styled.div`  
  background-image: url('https://res.cloudinary.com/marcesallito/image/upload/v1589977561/UserLikes.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 20px;
  height: 136px;
`;

export const ContentEventCard = styled.div`
  ${'' /* background-image: url('https://res.cloudinary.com/marcesallito/image/upload/v1589976874/face-in/go-party-like-a-vip-in-barcelona-party-955x508_fhikm8.jpg'); */}
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: #9599C5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 15px 15px 0px 0px;
  height: 6em;
`;

export const EventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #E3E5F3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;  
  border-radius: 20px;
  height: 136px;
`;

export const HeaderBackground = styled.div`
  background: #61637B;
  width: 100%;
  height: 376px;
  ackground-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  top: 1.2em;
  position: absolute;
`;

export const UserProfileLabelContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SimpleContainerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  bottom: 2em;
  background: #ccc;
  border-radius: 6px;
  height: 45em;
`;
