//Taylor Zweigle, 2023
const setSelectedDate = (selectedDate = 2023, action) => {
  switch (action.type) {
    case "SELECTED_DATE": {
      return (selectedDate = action.value);
    }
    default:
      return selectedDate;
  }
};

export default setSelectedDate;
