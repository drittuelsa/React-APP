
var initialState ={
    Name : "Drittu",
    MidName : "Elsa",
    LastName : "Sebastian",
    Users : []
}

//Reducer -Fn that takes 2 parameter (state,action)
//state is an object-- here we give default value to state

export function CustomReducer(state = initialState, action){

    //Based on action,it changes the state & returns you new state---this is to change state value
    //in Redux we dont change state directly, we make copy of state

    var newState = {...state}
    if(action.type == "NameGetter"){
        newState.Name = action.UserName
        return newState
    }

    if(action.type == "UserSuccess"){
        newState.Users = action.UserData
        return newState
   }

    return newState
}