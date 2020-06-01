import React, { Component, createContext } from 'react';
import authService from '../services/authService';
import { DualRing } from 'react-awesome-spinners';

const AuthContext = createContext();
const { Provider } = AuthContext;
const AuthConsumer = AuthContext.Consumer;

export const withAuth = Comp => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthConsumer>
          {({
            isLoading,
            isLoggedin,
            user,
            handleLogin,
            handleLogout,
            handleSignup,
            // handleProfileUpdate,
          }) => (
              <Comp
                {...this.props}
                isLoading={isLoading}
                isLoggedin={isLoggedin}
                user={user}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                handleSignup={handleSignup}
              // handleProfileUpdate={handleProfileUpdate}
              />
            )}
        </AuthConsumer>
      );
    }
  };
};

export default class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: undefined,
    isLoading: true,
  };

  componentDidMount() {
    authService
      .whoami()
      .then((user) => {
        this.setState({
          isLoggedin: true,
          isLoading: false,
          user,
        });
        // console.log('whoami', user);
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isLoggedIn: false,
          user: null,
        });
      });
  }

  handleLogin = user => {
    authService
      .login(user)
      .then(loggedUser => {
        this.setState({
          isLoggedin: true,
          user: loggedUser,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          user: null,
        });
      });
  };

  handleSignup = user => {
    authService
      .signup(user)
      .then(registeredUser => {
        this.setState({
          isLoggedin: true,
          user: registeredUser,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  // handleProfileUpdate = user => {
  //   authService
  //     .profileUpdate(user)
  //     .then(updatedUser => {
  //       this.setState({
  //         isLoggedin: true,
  //         user: updatedUser,
  //         isLoading: false,
  //       });
  //     })
  //     .catch(() => {
  //       this.setState({
  //         isLoading: false,
  //       });
  //     });
  // };

  handleLogout = () => {
    this.setState({
      isLoading: true,
    });
    authService
      .logout()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: undefined,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isLoading: false,
          isLoggedin: false,
          user: undefined,
        });
      });
  };

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { children } = this.props;
    if (isLoading) {
      return <DualRing />
    } else {
      return (
        <Provider
          value={{
            isLoading,
            isLoggedin,
            user,
            handleLogin: this.handleLogin,
            handleLogout: this.handleLogout,
            handleSignup: this.handleSignup,
            // handleProfileUpdate: this.handleProfileUpdate,
          }}
        >
          {children}
        </Provider>
      );
    }
  }
}
