export default function reducer(
state = {
    searched_space: false,
    spaces:[],
    isAddingSpace: false,
    isAdded: false,
    response: ""
},
action)
{
    switch (action.type) {
        case "SEARCH_SPACE":{
            return {
                ...state,
                searched_space: true
            }
        }
        case "RESET_SEARCH":{
            return {
                ...state,
                searched_space: false
            }
        }

        case "REQUEST_ADD_SPACE":{
            return {
               ...state,
               isAddingSpace: true,
               isAdded: false
            }
         }
        case "FAILED_ADD_SPACE":{
            return {
               ...state,
               isAdded: false,
               isAddingSpace: false,
               response: action.payload.error
            }
         }
        case "SUCCESS_ADD_SPACE":{
            return {
               ...state,
               isAdded: true,
               isAddingSpace: false,
               response: action.payload.response,
               spaces: [...state.spaces, action.payload.space_info]
            }
         }

        case "FETCH_SPACES":{

        }
    }

    return state
}
