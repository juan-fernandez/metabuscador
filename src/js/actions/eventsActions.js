export function addEvent(date){
    return {
        type: "ADD_EVENT",
        payload:{
            date_new_event: date
        }
    }
}
export function closeModal(){
    return {
        type: "CLOSE_MODAL",
    }
}

export function updateSpace(space_name){
    return {
        type: "UPDATE_SPACE",
        payload:{
            space_name
        }
    }
}

export function new_event(){
    return {
        type: "NEW_EVENT"
    }
}

export function clickEvent(event_date){
    return {
        type: "CLICK_EVENT",
        payload:{
            event_date
        }
    }
}
export function removeEvent(){
    return {
        type: "REMOVE_EVENT",
    }
}
export function moveEvent(event_date,delta){
    return {
        type: "MOVE_EVENT",
        payload: {
            event_date,
            delta
        }
    }
}
export function toggleEvent(id){
   return {
      type: "TOGGLE_EVENT",
      payload: {
         id
      }
   }
}
