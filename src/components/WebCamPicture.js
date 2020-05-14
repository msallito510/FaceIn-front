import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 350,
  height: 350,
  facingMode: 'user',
};

class WebCamPicure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      takingPicture: false
    }
    this.image = null;
    this.webcam = React.createRef();
  }

  capture = () => {
    const imageSrc = this.webcam.current.getScreenshot();

    this.props.landmarkPicture(imageSrc);
  };


  render() {
    const { handleLogout } = this.props;
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* <button onClick={handleLogout}>Logouts</button> */}
        {/* <Link to={`/attend`}>Attend</Link> */}
        <h1>smile :)</h1>
        <Webcam
          audio={false}
          height={350}
          ref={this.webcam}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <img src="/img/seguridad.png" alt="Take Pic" height={100}
          onClick={this.capture}
        />
      </div>
    );
  }
}

export default withAuth(withTheme(WebCamPicure));
