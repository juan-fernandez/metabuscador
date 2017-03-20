export function change_tab(tab){
    return {
        type: "CHANGE_TAB",
        payload:{
            tab
        }
    }
}
export function provider_change_view(view){
    return {
        type: "PROVIDER_CHANGE_VIEW",
        payload:{
            view
        }
    }
}
