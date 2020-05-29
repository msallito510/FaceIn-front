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
    foreground: "#F9F9F9;",
    background: "#F9F9F9;",
    backgroundTwo: "#E3E5F3",
    color: "#1F1F1F",
    primaryButton: "#F57873",
    secundaryButton: "#17d1e0",
    tertiaryButton: "#69C340",
  },
  dark: {
    name: "dark",
    foreground: "#192a3e",
    background: "#192a3e",
    backgroundTwo: "#292B4D",
    color: "#F9F9F9",
    primaryButton: "#009fae",
    secundaryButton: "#be4848",
    tertiaryButton: "#69C340",
  },
};

export default class ThemeProvider extends Component {
  state = {
    theme: themes.light,

  };

  componentDidMount() {
    this.setState({
      theme: this.state.theme.name === "dark" ? themes.light : themes.dark,
    });
  }

  changeTheme = () => {
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