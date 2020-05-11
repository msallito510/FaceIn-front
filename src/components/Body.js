import { withTheme } from "../context/themeContext";

const Body = (value) => {
  const { theme } = value;
  const body = document.body;
  body.setAttribute("class", theme.name);
  return null;
};

export default withTheme(Body);