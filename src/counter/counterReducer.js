var initialState = {
    counter : 0
};

export function CounterReducer (state = initialState, action){

    var newState = {...state}

    if(action.type == "incrementData"){
    //    newState.Addition = action.CounterInc
        return {newState, counter: state.counter + 1}
       
    }

    if(action.type == "decrementData"){
    //    newState.Subtraction = action.CounterDec
        return {newState, counter:state.counter - 1} 
    }


    return newState
}