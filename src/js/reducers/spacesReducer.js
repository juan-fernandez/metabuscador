export default function reducer(
state = {
    navbar_items:[
        {
            id: "1",
            text: "Calendario",
            selected: true
        },
        {
            id: "2",
            text: "Tus espacios",
            selected: false
        }
    ],
    searched_space: false,
},
action)
{
    switch (action.type) {
        case "CHANGE_VIEW":{
            return {
                ...state,
                navbar_items: state.navbar_items.map((item)=>{
                    item.selected = false;
                    return item;
                }).map((item)=>{
                    if(item.id === action.payload.id){
                        item.selected = true;
                    }
                    return item;
                })
            }
        }
        case "SEARCH_SPACE":{
            return {
                ...state,
                searched_space: true
            }
        }
    }

    return state
}
