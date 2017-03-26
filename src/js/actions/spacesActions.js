var axios = require('axios')

export function searchSpace(){
    return {
        type: "SEARCH_SPACE",
    }
}
export function reset_search(){
    return{
        type: "RESET_SEARCH"
    }
}
export function request_add_space(space_info){
   return{
      type: 'REQUEST_ADD_SPACE',
      isPosting: true,
      isCreated: false
   }
}
export function failed_add_space(space_info){
   return{
      type: 'FAILED_ADD_SPACE',
      isPosting: false,
      isCreated: false
   }
}
export function success_add_space(response){
   return{
      type: 'SUCCESS_ADD_SPACE',
      isPosting: false,
      isCreated: true,
      response
   }
}

export function add_space(space_info){
   console.log('space_info',space_info)
   return dispatch =>{
      dispatch(request_add_space(space_info))
      return axios.post('http://localhost:3002/spaces',space_info)
      .then((response)=>{
         console.log('response',response)
         dispatch(success_add_space(response))
      })
      .catch((err)=>{
         dispatch(failed_add_space(space_info))
         console.log('error',err)
      })
   }

}
