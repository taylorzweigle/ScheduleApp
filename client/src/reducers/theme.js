//Taylor Zweigle, 2023

const setTheme = (theme = "light", action) => {
  switch (action.type) {
    case "THEME": {
      return theme === "light" ? "dark" : "light";
    }
    default:
      return theme;
  }
};

export default setTheme;
