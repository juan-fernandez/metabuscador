export function changeView(target_id){
    return {
        type: "CHANGE_VIEW",
        payload:{
            id: target_id
        }
    }
}
export function addEvent(date){
    return {
        type: "ADD_EVENT",
        payload:{
            date
        }
    }
}
export function searchSpace(){
    return {
        type: "SEARCH_SPACE",
    }
}
