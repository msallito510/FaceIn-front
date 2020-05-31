import React, { Component } from 'react';

import userService from '../services/userService';
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { Base64 } from 'js-base64';
import { DualRing } from 'react-awesome-spinners';

class UserCard extends Component {
  state = {
    loading: true,
    user: {},
    userPhoto: "",
  };

  webcamRef = React.createRef();
  async componentDidMount() {
    const { user: { _id } } = this.props;

    try {
      const user = await userService.getUserById(_id)
      if (user.imageCam) {
        const userPhotoBase64 = await userService.getProfilePhoto(_id)

        const userPhoto = await Base64.decode(userPhotoBase64);
        this.setState({
          userPhoto,
        })
      }
      this.setState({
        user,
        loading: false,
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }


  render() {
    const { loading, userPhoto } = this.state;

    const styles = {
      width: 200,
      height: 200,
    };
    return (
      <div>
        {loading && <DualRing />}
        {!loading && (
          <div>
            {userPhoto ? <img className="user-img" src={userPhoto} styles={styles} alt="user pic" /> : <div></div>}
          </div>
        )}
      </div>
    );
  }
}
export default withAuth(withTheme(UserCard));
