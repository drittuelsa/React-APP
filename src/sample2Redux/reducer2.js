var initialState = {
    Name : "Drittu"
}

 export function ReducerCustom (state = initialState, action){

var newState = {...state}
if(action.type == "UseName"){
 newState.Name = action.payload
 return newState
}

return newState

}
