import React from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import {
  TitleLh1,
  TitleDh2,
  TitleDh3,
  HeaderBackground,
  GeneralBackground,
  SecondaryWrapperLeft,
  SecondaryWrapperRight,
  PhotoProfile,
  PhotoContainer,
  StyledLink,
  UserProfileBarUl,
  MenuBarLi,
  UserProfileLabelContent
} from "../styles/styledComponents";
import { PlusCircleIcon, EditIcon, PlayCircleIcon } from "../styles/icon-style";
const UserProfile = ({ user }) => {
  // const { handleLogout } = this.props;

  return (
    <HeaderBackground>
      <div>
        <TitleLh1>{user.username}'s profile</TitleLh1>
      </div>
      <PhotoContainer>
        <PhotoProfile>
          photo
      </PhotoProfile>
      </PhotoContainer>
      <GeneralBackground>
        <SecondaryWrapperLeft>
          <TitleDh2>Event</TitleDh2>
          <UserProfileBarUl>
            <MenuBarLi>
              {user ? <StyledLink to="/add-event" user={user._id}>
                <UserProfileLabelContent>
                  <TitleDh3>Add</TitleDh3>
                  <PlusCircleIcon />
                </UserProfileLabelContent>
              </StyledLink> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <StyledLink to="/user-events" user={user}>
                <UserProfileLabelContent>
                  <TitleDh3>Edit</TitleDh3>
                  <EditIcon />
                </UserProfileLabelContent>
              </StyledLink> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <StyledLink to="/attend" user={user}>
                <UserProfileLabelContent>
                  <TitleDh3>Attend</TitleDh3>
                  <PlayCircleIcon />
                </UserProfileLabelContent>
              </StyledLink> : <div></div>}
            </MenuBarLi>
          </UserProfileBarUl>
        </SecondaryWrapperLeft>
        <SecondaryWrapperRight>
          <TitleDh2>Place</TitleDh2>
          <UserProfileBarUl>
            <MenuBarLi>
              {user ? <StyledLink to="/add-place">
                <UserProfileLabelContent>
                  <TitleDh3>Add</TitleDh3>
                  <PlusCircleIcon />
                </UserProfileLabelContent>
              </StyledLink> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <StyledLink to={`/places/${user.hasPlace}`}>
                <UserProfileLabelContent>
                  <TitleDh3>Edit</TitleDh3>
                  <EditIcon />
                </UserProfileLabelContent>
              </StyledLink> : <div></div>}
            </MenuBarLi>
          </UserProfileBarUl>
        </SecondaryWrapperRight>
      </GeneralBackground>
      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* <Link to={`/protectedview`}>ProtectedView</Link> */}
    </HeaderBackground>
  );
};

export default withAuth(withTheme(UserProfile));
