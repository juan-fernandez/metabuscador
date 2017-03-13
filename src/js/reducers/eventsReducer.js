export default function reducer(
state = {
    events:[
        {
            title: "Example",
            date: Date.now(),
            allDay: true,
        }
    ],
    adding_event: false, // flag to show modal
    space_name: "",
    date_new_event: null
},
action)
{
    switch (action.type) {
        case "ADD_EVENT":{
            console.log(action.payload)
            return{
                ...state,
                adding_event: true,
                date_new_event: action.payload.date_new_event
            }
        }
        case "NEW_EVENT":{
            return{
                ...state,
                events: [...state.events,
                            {
                                title: state.space_name,
                                date: state.date_new_event,
                                allDay: true
                            }
                        ],
                date_new_event: null,
                space_name: "",
            }
        }
        case "CLOSE_MODAL":{
            return{
                ...state,
                adding_event: false,
                date_new_event: null,
                space_name: "",
            }
        }
        case "UPDATE_SPACE":{
            return{
                ...state,
                space_name: action.payload.space_name
            }
        }
    }

    return state
}
