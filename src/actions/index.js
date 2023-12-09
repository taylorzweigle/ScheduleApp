//Taylor Zweigle, 2023
export const theme = () => {
  return {
    type: "THEME",
  };
};

export const selectedDate = (selectedDate) => {
  return {
    type: "SELECTED_DATE",
    value: selectedDate,
  };
};
