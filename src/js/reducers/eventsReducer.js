export default function reducer(
state = {
    events:[
        {
            title: "Sala de eventos 1" ,
            date: new Date(2017,2,13),
            allDay: true,
        },
        {
            title: "Aula Magna" ,
            date: new Date(2017,2,14),
            allDay: true,
        },
        {
            title: "Anfiteatro" ,
            date: new Date(2017,2,14),
            allDay: true,
        },
    ],
    adding_event: false, // flag to show modal
    space_name: "",
    date_new_event: null,
    clicked_event: -1,
    removing_event: false //flag to show modal to remove
},
action)
{
    switch (action.type) {
        case "ADD_EVENT":{ // opening modal, not yet added
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
                removing_event: false,
                clicked_event: -1,
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
        case "CLICK_EVENT":{
            return{
                ...state,
                removing_event: true,
                clicked_event: action.payload.event_date
            }
        }
        case "REMOVE_EVENT":{
            return {
                events: state.events.filter((event)=>{
                    if(event.date === state.clicked_event){
                        return false;
                    }
                    return true;
                }),
                removing_event: false,
                clicked_event: -1,
            }
        }
        case "MOVE_EVENT":{

            return {
                ...state,
                events: state.events.map((event)=>{
                    if(event.date === action.payload.event_date){
                        let date = new Date(action.payload.event_date);
                        date.setDate(date.getDate()+action.payload.delta._days)
                        return{
                            ...event,
                            date: date
                        }
                    }
                    return event;
                })
            }

        }
    }

    return state
}
