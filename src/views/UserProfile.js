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
  StyledLink_D,
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
          <StyledLink_D to="/react-webcam">
            <CameraIcon />
          </StyledLink_D>
        </PhotoProfile>
      </PhotoContainer>
      <ProfileBackground>
        <SecondaryWrapperLeft>
          <TitleDh2>Event</TitleDh2>
          <UserProfileBarUl>
            <MenuBarLi>
              {user ? <StyledLink_D to="/add-event" user={user._id}>
                <UserProfileLabelContent>
                  <TitleDh3>Add</TitleDh3>
                  <PlusCircleIcon />
                </UserProfileLabelContent>
              </StyledLink_D> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <StyledLink_D to="/user-events" user={user}>
                <UserProfileLabelContent>
                  <TitleDh3>Edit</TitleDh3>
                  <EditIcon />
                </UserProfileLabelContent>
              </StyledLink_D> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>

              {user ? <StyledLink_D to="/attend" user={user}>

                <UserProfileLabelContent>
                  <TitleDh3>Attend</TitleDh3>
                  <PlayCircleIcon />
                </UserProfileLabelContent>
              </StyledLink_D> : <div></div>}
            </MenuBarLi>
          </UserProfileBarUl>
        </SecondaryWrapperLeft>
        <SecondaryWrapperRight>
          <TitleDh2>Place</TitleDh2>
          <UserProfileBarUl>
            <MenuBarLi>
              {user ? <StyledLink_D to="/add-place">
                <UserProfileLabelContent>
                  <TitleDh3>Add</TitleDh3>
                  <PlusCircleIcon />
                </UserProfileLabelContent>
              </StyledLink_D> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <StyledLink_D to={`/places/${user.hasPlace}`}>
                <UserProfileLabelContent>
                  <TitleDh3>Edit</TitleDh3>
                  <EditIcon />
                </UserProfileLabelContent>
              </StyledLink_D> : <div></div>}
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
