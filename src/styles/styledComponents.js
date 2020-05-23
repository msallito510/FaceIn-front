import styled, { keyframes } from 'styled-components';
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
  font-weight: 900;
  font-size: 1.7em;
  text-align: center;
  color: #fff;
  bottom: 4.5em;
`;

export const BoldTitleCardDh1 = styled.h1`
  opacity: 1;
  position: relative;
  font-weight: 900;
  font-size: 1.7em;
  text-align: center;
  color: #1F1F1F;
  bottom: 4.5em;
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

export const TimeEventCardDetailLh3 = styled.h3`  
position: relative;
  top: 0em;
  font-weight: 200;
  font-size: 0.8em;
  padding: 0.2em;
  line-height: 13px;
  width: -webkit-fill-available;
`;

export const TagEventCardDetailsLh3 = styled.h3`  
  display: flex;
  flex-direction: row;
  margin: 1em;
  font-weight: 200;
  font-size: 0.8em;
  padding: 0.2em;
  line-height: 13px;
  width: -webkit-fill-available;
`;

export const TitleDh2 = styled.h2`
  position: relative;
  bottom: 2em;
  font-size: 1.5em;
  text-align: center;
  color: #1F1F1F;
`;

export const TitleEventCardDetailDh1 = styled.h1`
  position: relative;
  font-size: 1.2em;
  text-align: center;
  color: #1F1F1F;
  right: 7em;
  font-weight: bold;
`;

export const TitleEventCardDetailDh2 = styled.h2`
  position: relative;
  top: 0.7em;
  font-size: 1.5em;
  text-align: center;
  color: #1F1F1F;
`;

export const EventDetailSocialTitle = styled.h2`
  color: #2D9CDB;
  font-weight: bold;`;

export const TitleDh3 = styled.h3`
  position: relative;
  width: 6.5em;
  float: right;
  bottom: 2em;
  font-size: 1em;
  text-align: left;
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

export const SecondaryWrapperLeft = styled.section`
  position: relative;
  float: left;
  padding: 4em;
  height: 10em;
  width: 11.5em;
  background: #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 8px 8px 50px #000;
`;

export const FormWrapper = styled.section`
  padding: 1em;
  color: #000;  
`;

export const SecondaryWrapperRight = styled.section`
  position: relative;
  float: right;
  padding: 4em;
  height: 10em;
  width: 11.5em;
  background: #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 8px 8px 50px #000;
`;

export const InputDark = styled.input`
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  outline: none;
  height: 30px;
  font-size: 16px;
  opacity: 1;
  color: #61637B;
`;

export const InputLight = styled.input`
  border: none;
  border-bottom: 1px solid #dff;
  background: transparent;
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

export const Submit = styled.input.attrs({
  type: 'submit'
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
`;

export const Button = styled.button`
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
`;

export const EventDetailLikeContainer = styled.div`
  position: absolute;
  top: 0.9em;
  left: 1em;
`;

export const EventDetailSubmitContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0.5em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none !important;
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
export const UserProfileBarUl = styled.ul`
  position: relative;
  bottom: 0;
  left: 0;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 10;
  @media (max-width: 768px) {
    height: 3.5em;
    width: 100%;
  }
`;

export const GeneralBackground = styled.div`
  background: #fff;
  top: 20rem;
  position: absolute;
  width: 100%;
  height: 45em;
  padding: 1em 0;
  text-align: center;
  border-radius: 20px;
  `;
export const SearchBackground = styled.div`
  background: #fff;
  top: 10rem;
  position: absolute;
  width: 100%;
  height: 50em;
  padding: 1em 0;
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

export const EventDetailImageBackground = styled.div`
  background-image: url('https://res.cloudinary.com/marcesallito/image/upload/v1589976758/face-in/home-bcn_ifptga.jpg');
  width: 100%;
  height: 376px;
  ackground-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  top: 0;
  position: absolute;
  transform: translateY(-50%);
  z-index: 3;
  animation: 50% { background-position: Calc(-35vw - 40px) 50%; } 70s 2;
  ${'' /* animation: ${keyFrameEventDetailImg} 70s 2; */}
`;

const keyFrameEventDetailImg = keyframes`
  
  50% {
    background-position: Calc(-35vw - 40px) 50%;
  }
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

export const EventCardDetailContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  background: #E3E5F3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;  
  border-radius: 20px;
  height: 100px;
  margin: 0.3em;
`;

export const EventCardDetailContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: #E3E5F3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;  
  border-radius: 20px;
  height: 145px;
  margin: 0.3em;
`;

export const EventCardDetailContainerPlace = styled.div`
  display: flex;
  flex-direction: column;
  background: #E3E5F3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;  
  border-radius: 20px;
  height: 25em;
  margin: 0.3em;
`;

export const EventCardDetailMapPlace = styled.div`
  background: #E3E5F3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;  
  border-radius: 20px;
  height: 20em;
  width:22em;
  margin: 0.3em;
  z-index: 0;
`;

export const HeaderBackground = styled.div`
  background: #61637B;
  width: 100%;
  height: 376px;
  ackground-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  top: 0;
  position: absolute;
`;

export const PhotoContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
	align-items: center;
`;

export const PhotoProfile = styled.div`  
  display: flex;  
  justify-content: center;
  align-items: center;
  height: 10em;
  background: #fff;
  width: 10em;
  border-radius: 50%;
`;

export const UserProfileLabelContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
`;

export const HeaderUserProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 5em;
`;

export const EventDetailSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;