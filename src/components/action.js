
//Action creator -Fn that retuns action
//Action - object with property "type"

export function GetName(Name){
    return{
        type: "NameGetter",
        UserName : Name
    }
}

//for React Asynchronous - Asynchronous call (promise based library that offers adeclarative API to make API calls)

//react thunk - it is the middleware
//            - it gives our action creator ability to return a function (which dispatches another action), instead of action

export function GetUsers(){
    return(dispatch) =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json =>{
             dispatch(GetUserSuccess(json))
            })
    }    
}

export function GetUserSuccess(Users){//(data)
    return{
        type : "UserSuccess",
        UserData : Users//data
    }
}