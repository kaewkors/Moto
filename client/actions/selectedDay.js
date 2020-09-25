export const SET_DATE = "SET_DATE"
export const CLEAR_DATE = "CLEAR_DATE"

export const selectedDate = (selectedDate) => {
  return {
    type: SET_DATE,
    selectedDate,
  }
}

export const clearSelectedDate = () => {
  return {
    type: CLEAR_DATE,
  }
}
