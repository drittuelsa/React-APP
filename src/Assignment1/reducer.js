var initialState ={
    data : [],
    jokes :[]
}

export function ReducerFile(state = initialState, action){

    var newState = {...state}

    if(action.type == "ByName"){
        newState.data = action.payload
        return newState
    }

    if(action.type == "ByJokes"){
        newState.jokes = action.payload
        return newState
    }
    return newState
}