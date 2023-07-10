

export function GetData(){
    return(dispatch) =>{
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(response =>response.json())
        .then(json =>{
            dispatch(GetByName(json))
        })
    }
}

export function GetByName(data){
   return{
        type : "ByName",
        payload : data
   }
}

export function GetJokes(){
    return(dispatch) =>{
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response =>response.json())
        .then(json =>{
            dispatch(GetByList(json))
        })
    }
}
export function GetByList(jokes){
    return{
         type : "ByJokes",
         payload : jokes
    }
 }