import React from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";

import ReactWebcam from "./ReactWebcam";

import {
  TitleLh1,
  TitleDh2,
  TitleDh3,
  HeaderBackground,
  ProfileBackground,
  SecondaryWrapperLeft,
  SecondaryWrapperRight,
  PhotoProfile,
  PhotoContainer,
  StyledLinkDark,
  UserProfileBarUl,
  MenuBarLi,
  UserProfileLabelContent,
  HeaderUserProfile
} from "../styles/styledComponents";

import { PlusCircleIcon, EditIcon, PlayCircleIcon, LogOutIcon, CameraIcon } from "../styles/icon-style";
const UserProfile = ({ user, handleLogout }) => {


  return (
    <HeaderBackground>
      <HeaderUserProfile>
        <div>
          <TitleLh1>{user.username}'s profile</TitleLh1>
        </div>
        <div>
          <button onClick={handleLogout}>
            <LogOutIcon />
          </button>
        </div>
      </HeaderUserProfile>
      <PhotoContainer>
        <PhotoProfile>
          <StyledLinkDark to="/react-webcam">
            <CameraIcon />
          </StyledLinkDark>
        </PhotoProfile>
      </PhotoContainer>
      <ProfileBackground>
        <SecondaryWrapperLeft>
          <TitleDh2>Event</TitleDh2>
          <UserProfileBarUl>
            <MenuBarLi>
              {user ? <StyledLinkDark to="/add-event" user={user._id}>
                <UserProfileLabelContent>
                  <TitleDh3>Add</TitleDh3>
                  <PlusCircleIcon />
                </UserProfileLabelContent>
              </StyledLinkDark> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <StyledLinkDark to="/user-events" user={user}>
                <UserProfileLabelContent>
                  <TitleDh3>Edit</TitleDh3>
                  <EditIcon />
                </UserProfileLabelContent>
              </StyledLinkDark> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>

              {user ? <StyledLinkDark to="/attend" user={user}>

                <UserProfileLabelContent>
                  <TitleDh3>Attend</TitleDh3>
                  <PlayCircleIcon />
                </UserProfileLabelContent>
              </StyledLinkDark> : <div></div>}
            </MenuBarLi>
          </UserProfileBarUl>
        </SecondaryWrapperLeft>
        <SecondaryWrapperRight>
          <TitleDh2>Place</TitleDh2>
          <UserProfileBarUl>
            <MenuBarLi>
              {user ? <StyledLinkDark to="/add-place">
                <UserProfileLabelContent>
                  <TitleDh3>Add</TitleDh3>
                  <PlusCircleIcon />
                </UserProfileLabelContent>
              </StyledLinkDark> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <StyledLinkDark to={`/places/${user.hasPlace}`}>
                <UserProfileLabelContent>
                  <TitleDh3>Edit</TitleDh3>
                  <EditIcon />
                </UserProfileLabelContent>
              </StyledLinkDark> : <div></div>}
            </MenuBarLi>
          </UserProfileBarUl>
        </SecondaryWrapperRight>
        <div>
          <ReactWebcam />
        </div>
      </ProfileBackground>



      {/* <Link to={`/protectedview`}>ProtectedView</Link> */}
    </HeaderBackground>
  );
};

export default withAuth(withTheme(UserProfile));
