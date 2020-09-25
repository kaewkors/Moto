export const SET_DATE = "SET_DATE"
export const CLEAR_DATE = "CLEAR_DATE"


export const selectedDate = () => {
    return {
        type: SELECTED_DATE,
        selectedDate,
    }
}

export const clearSelectedDate = () => {
    
    return {
        type: CLEAR_DATE,
        clearSelectedDate,


    }
}