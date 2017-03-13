export function addEvent(date){
    return {
        type: "ADD_EVENT",
        payload:{
            date
        }
    }
}
