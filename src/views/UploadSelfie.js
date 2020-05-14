import React, { Component } from "react";
import WebCamPicture from "../components/WebCamPicture";
import { Link } from "react-router-dom";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";


class UploadSelfie extends Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
    this.canvasPicWebCam = React.createRef();
  }

  async componentDidMount() {

    // const testImageHTML = document.getElementById("test");
    // this.drawHTMLImage(this.canvas.current, testImageHTML, 296, 296);
    // this.drawDescription(this.canvas.current);
  }

  landmarkWebCamPicture = (picture) => {
    const ctx = this.canvasPicWebCam.current.getContext("2d");
    var image = new Image();
    image.onload = async () => {
      ctx.drawImage(image, 0, 0);
    };
    image.src = picture;
  };


  render() {
    const { handleLogout } = this.props;
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Upload Selfie</h1>
        <WebCamPicture landmarkPicture={this.landmarkWebCamPicture} />
        <canvas ref={this.canvasPicWebCam} width={350} height={350} />
      </div>
    );
  }
}

export default withAuth(withTheme(UploadSelfie));
