import { combineReducers } from "redux"

import spaces from "./spacesReducer"
import events from "./eventsReducer"

export default combineReducers({
    spaces,
    events
})
