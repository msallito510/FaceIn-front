import React, { Component, createContext } from 'react';

const ThemeContext = createContext();
const Provider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export const withTheme = (Comp) => {
  return class WithTheme extends Component {
    render() {
      return (
        <ThemeConsumer>
          {
            ({
              theme,
              changeTheme
            }) => (
                <Comp
                  {...this.props}
                  theme={theme}
                  changeTheme={changeTheme}
                />
              )}
        </ThemeConsumer>
      );
    }
  };
};

export const themes = {
  light: {
    name: "light",
    foreground: "#009688",
    background: "#009688",
    color: "#192A3E",
  },
  dark: {
    name: "dark",
    foreground: "#ffffff",
    background: "#192a3e",
    color: "#009688",
  },
};

export default class ThemeProvider extends Component {
  state = {
    theme: themes.light,
  };

  changeTheme = () => {
    // console.log("change");
    this.setState({
      theme: this.state.theme.name === "dark" ? themes.light : themes.dark,
    });
  };

  render() {
    const { theme } = this.state
    const { children } = this.props;
    return (
      <Provider
        value={{
          theme,
          changeTheme: this.changeTheme,
        }}>
        {children}
      </Provider>
    );
  }
}