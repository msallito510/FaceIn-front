import styled from 'styled-components';

export const EventDetailBackground = styled.div`
  background:${ (props) =>
    props.background};
  overflow: hidden;
  overflow-y:scroll;
  bottom:-35em;
  top: 20rem;
  position: absolute;
  width: 100%;
  padding: 1em 0 2em;
  text-align: center;
  border-radius: 1em;
`;

export const TitleEventDetailH1 = styled.h1`
  position: relative;
  top: 0.7em;
  font-size: 1.5em;
  text-align: center;
`;

export const TitleEventDetailH2 = styled.h2`
  position: relative;
  font-size: 1.2em;
  text-align: center;
  color:#1F1F1F;
  right: 7em;
  font-weight: bold;
`;

export const TitleEventDetailH3 = styled.h3`  
  display: flex;
  flex-direction: row;
  margin: 1em;
  font-weight: 200;
  font-size: 0.8em;
  padding: 0.2em;
  line-height: 13px;
  width: -webkit-fill-available;
`;

export const TimeInfoContainer = styled.h3`  
  position: relative;
  top: 0em;
  font-weight: 200;
  font-size: 0.8em;
  padding: 0.2em;
  line-height: 13px;
  width: -webkit-fill-available;
`;

export const SocialTitle = styled.h2`
  position: relative;
  right: 1em;
  color: #2D9CDB;
  font-weight: bold;
  padding: 0.5em 0 0;
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0.5em;
  color: #1F1F1F;
`;

export const MapPlaceContainer = styled.div`
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

export const SubmitContainer = styled.div`
  position: absolute;
  bottom: 5em;
  left: 0.5em;
`;

export const LikeButtonContainer = styled.div`
  position: absolute;
  top: 0.9em;
  left: 1em;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #E3E5F3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;  
  border-radius: 20px;
  height: 100px;
  margin: 0.3em;
  padding:0.5em;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #E3E5F3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;  
  border-radius: 20px;
  height: 145px;
  margin: 0.3em;
  padding:0.5em;
`;

export const InfoMapPlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #E3E5F3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;  
  border-radius: 20px;
  height: 22em;
  margin: 0.3em;
  padding:0.5em;
`;

export const SocialPhoto = styled.img`
  padding: 0.5em 0 0;
  width: 3em;
  border-radius: 50%;
`;

export const SocialCounter = styled.p`
    background: #2D9CDB;
    height: 1em;
    border-radius: 0.5em;
    padding: 0 0.5em;
    font-weight: bold;
    color:#E3E5F3;
`;