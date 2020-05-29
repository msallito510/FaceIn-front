import React, { Component } from 'react';
import Webcam from 'react-webcam';
import userService from '../services/userService';
import { Link } from "react-router-dom";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { Base64 } from 'js-base64';
import UserCard from './UserCard';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { GeneralContainer, Button, TitleH1 } from "../styles/commonStyle";

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

class ReactWebcam extends Component {
  state = {
    loading: true,
    imgSrc: null,
    user: {},
    userId: "",
    userPhoto: "",
  };

  webcamRef = React.createRef();
  async componentDidMount() {
    const { user } = this.props;
    const userId = user._id;
    try {
      const user = await userService.getUserById(userId)
      if (user.imageCam) {
        const userPhotoBase64 = await userService.getProfilePhoto(userId)

        const userPhoto = await Base64.decode(userPhotoBase64);
        this.setState({
          userPhoto,
        })
      }
      this.setState({
        user,
        userId,
        loading: false,
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }
  capture = () => {
    const imgSrc = this.webcamRef.current.getScreenshot();
    this.setState({
      imgSrc,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { history: { push } } = this.props;
    const { imgSrc, userId } = this.state;

    userService
      .addProfilePhoto(imgSrc, userId)
      .then(() => { toast.success('📸 your photo has been stored'); })
      .then(() => {
        push(`/user-profile`)
      })
      .catch(error => console.log(error))
  };

  render() {
    const { loading, imgSrc } = this.state;
    const { user, theme } = this.props;

    const videoConstraints = {
      width: 200,
      height: 200,
      facingMode: "user"
    };

    return (
      <HeaderWebCam>
        <TitleH1>Profile photo</TitleH1>
        {loading && <div>Loading...</div>}
        {!loading && (
          <GeneralContainer>
            <UserPhotoContainer>
              <UserPhotoTitleH2>Current user photo profile</UserPhotoTitleH2>
              <UserCard user={user} />

              <UserPhotoTitleH2>Take a new picture</UserPhotoTitleH2>
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
                  <UserPhotoTitleH2>New picture</UserPhotoTitleH2>
                  <img src={imgSrc} alt="source pic" />
                  <Button color={theme.color} background={theme.secundaryButton} onClick={this.handleSubmit}>
                    Send photo
                </Button>
                  <Button color={theme.color}>
                    <Link to={"/user-profile"}>
                      <p>Cancel</p>
                    </Link>
                  </Button>
                </div>
              )}
            </UserPhotoContainer>
          </GeneralContainer>
        )}
      </HeaderWebCam>
    );
  }
}
export default withAuth(withTheme(ReactWebcam));
