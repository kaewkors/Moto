import { SET_DATE, CLEAR_DATE } from "../actions/selectedDay"

const initialState = ""

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DATE:
            return action.selectedDay
        
        case CLEAR_DATE:
            return initialState
        
        default:
            return state
    }
}

export default reducer