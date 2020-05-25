import React, { Component } from 'react';
import Webcam from 'react-webcam';
import userService from '../services/userService';
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { Base64 } from 'js-base64';

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
    // const { history: { push } } = this.props;
    const { imgSrc, userId } = this.state;
    userService
      .addProfilePhoto(imgSrc, userId)
      // .then(() => { push(`/`); })
      .catch(error => console.log(error))
  };
  render() {
    const { loading, imgSrc, user, userPhoto } = this.state;
    const videoConstraints = {
      // width: 1280,
      // height: 720,
      width: 200,
      height: 200,
      facingMode: "user"
    };
    const styles = {
      width: 200,
      height: 200,
    };
    return (
      <div>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div>
            {/* <UserCard user={user} /> */}
            {userPhoto ? <img src={userPhoto} styles={styles} alt="image" /> : <div></div>}
            <Webcam
              audio={false}
              ref={this.webcamRef}
              screenshotFormat="image/jpeg"
              screenshotQuality={1}
              videoConstraints={videoConstraints}
            />
            <button onClick={this.capture}>Capture photo</button>
            {imgSrc && (
              <>
                <img src={imgSrc} alt="image" />
                <button onClick={this.handleSubmit}>Send photo</button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}
export default withAuth(withTheme(ReactWebcam));
