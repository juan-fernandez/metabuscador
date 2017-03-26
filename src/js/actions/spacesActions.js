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
      type: 'REQUEST_ADD_SPACE'
   }
}
export function failed_add_space(error){
   return{
      type: 'FAILED_ADD_SPACE',
      payload:{
         error
      }
   }
}
export function success_add_space(space_info,response){
   return{
      type: 'SUCCESS_ADD_SPACE',
      payload:{
         response,
         space_info
      }
   }
}

export function add_space(space_info){
   console.log('space_info',space_info)
   return dispatch =>{
      dispatch(request_add_space(space_info))
      return axios.post('http://localhost:3002/spaces',space_info)
      .then((response)=>{
         console.log('response',response)
         dispatch(success_add_space(space_info,response))
      })
      .catch((err)=>{
         dispatch(failed_add_space(err))
         console.log('error',err)
      })
   }

}
