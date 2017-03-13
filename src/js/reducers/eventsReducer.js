export default function reducer(
state = {
    events:[
        {
            title: "Example",
            date: Date.now(),
            allDay: true,
        }
    ]
},
action)
{
    switch (action.type) {
        case "ADD_EVENT":{
            return{
                ...state,
                events: [...state.events,
                            {
                                title: "added event",
                                date: action.payload.date,
                                allDay: true
                            }
                        ]
            }
        }
    }

    return state
}
