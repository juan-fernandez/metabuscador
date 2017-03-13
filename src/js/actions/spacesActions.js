export function changeView(target_id){
    return {
        type: "CHANGE_VIEW",
        payload:{
            id: target_id
        }
    }
}
