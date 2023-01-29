
const initstate = {
    users:[],
    isError:false,
    isLoading:false
}

const reducer = (state=initstate,action) => {
  switch(action.type){
   case "DATA_REQUEST":{
    return {...state,isLoading:true}
   }
   case "DATA_SUCCESS":{
    return {...state,users:action.payload}
   }
   case "DATA_ERROR":{
    return {...state,isError:true,isLoading:false}
   }
   case "POST_DATA_REQUEST":{
    return {...state,isLoading:true}
   }
   default :{
    return state
   }
  }
}

export default reducer