import React, { Component } from 'react';
import Webcam from 'react-webcam';
import participantService from '../../services/participantService';
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import { Base64 } from 'js-base64';
// import UserCard from '../UserCard';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { DualRing } from 'react-awesome-spinners';

import { GeneralContainer, Button, TitleH1 } from "../../styles/commonStyle";

const HeaderWebCam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 3em;
  
`;

const UserPhotoContainer = styled.div`
  background: #F9F9F9;
  border-radius: 1em;
  overflow: hidden;
  overflow-y:scroll;
  top:0em;
  bottom:2em;
  width:20em;
  margin: 0 0 3em;
`;

const UserPhotoTitleH2 = styled.h2`
  font-size: 1.2em;
  text-align: center;
  padding: 1em;
  color: #1F1F1F;
`;

class ScanFace extends Component {
  state = {
    loading: true,
    imgSrc: null,
    participant: {},
    participantPhoto: "",
  };

  webcamRef = React.createRef();
  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    try {
      const participant = await participantService.getParticipantById(id);

      this.setState({
        participant,
        // participantId,
        loading: false,
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      });
    }
  }

  capture = () => {
    const imgSrc = this.webcamRef.current.getScreenshot();
    this.setState({
      imgSrc,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { imgSrc, participant } = this.state;

    try {
      const isFaceMatched = await participantService.faceMatch(imgSrc, participant._id);

      if (isFaceMatched) {
        toast.success('🎉 yay! you have been recognized by Face-in 🥳');
        history.goBack();
      } else {
        toast.error('you have not recognized by Face-in. Try again');
      }
    } catch (error) {
      console.log(error);
    }

    if (participant.imageCamParticipant) {
      const participantPhotoBase64 = await participantService.getParticipantPhoto(participant._id);

      const participantPhoto = await Base64.decode(participantPhotoBase64);

      this.setState({
        participantPhoto,
      });
    }
  };

  render() {
    const { loading, imgSrc } = this.state;
    const { theme } = this.props;

    const videoConstraints = {
      width: 200,
      height: 200,
      facingMode: "participant"
    };

    return (
      <HeaderWebCam>
        <TitleH1>Scan participant face</TitleH1>
        {loading && <DualRing />}
        {!loading && (
          <GeneralContainer>
            <UserPhotoContainer>


              <UserPhotoTitleH2>Take a picture</UserPhotoTitleH2>
              <Webcam
                audio={false}
                ref={this.webcamRef}
                screenshotFormat="image/jpeg"
                screenshotQuality={1}
                videoConstraints={videoConstraints}
              />
              <Button color={theme.color} background={theme.primaryButton} onClick={this.capture}>
                Capture photo
            </Button>
              {imgSrc && (
                <div>
                  <UserPhotoTitleH2>Scan</UserPhotoTitleH2>
                  <img src={imgSrc} alt="source pic" />
                  <Button color={theme.color} background={theme.secundaryButton} onClick={this.handleSubmit}>
                    Send to scan
                  </Button>
                  <Button color={theme.color}>
                    <Link to={"/user-profile"}>
                      <p>Cancel</p>
                    </Link>
                  </Button>
                </div>
              )}

              {/* <UserPhotoTitleH2>Current user photo profile</UserPhotoTitleH2> */}
              {/* <UserCard user={user} /> */}
            </UserPhotoContainer>
          </GeneralContainer>
        )}
      </HeaderWebCam>
    );
  }
}
export default withAuth(withTheme(ScanFace));
