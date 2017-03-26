export default function reducer(
state = {
    searched_space: false,
    spaces:[],
    isAddingSpace: false,
    isAdded: false,
    response: "",
    isFetchingSpaces: false,
    isFetchedSpaces: false
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


        case "REQUEST_FETCH_SPACES":{
            return {
               ...state,
               isFetchingSpaces: true,
               isFetchedSpaces: false,

            }
         }
        case "FAILED_FETCH_SPACES":{
            return {
               ...state,
               isFetchingSpaces: false,
               isFetchedSpaces: false,
               response: action.payload.error
            }
         }
        case "SUCCESS_FETCH_SPACES":{
            return {
               ...state,
               isFetchingSpaces: false,
               isFetchedSpaces: false,
               searched_space: true,
               spaces: action.payload.spaces.map((space)=>{
                  return space.space_info
               })
            }
         }

    }

    return state
}
