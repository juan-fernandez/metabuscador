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
