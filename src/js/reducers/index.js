import { combineReducers } from "redux"

import spaces from "./spacesReducer"
import events from "./eventsReducer"
import auth from "./authReducer"

export default combineReducers({
    spaces,
    events,
    auth
})
