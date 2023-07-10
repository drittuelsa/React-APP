import { createStore ,applyMiddleware} from "redux";
import { CustomReducer } from "./reducer";
import thunk from "redux-thunk";



export var DefaultStore = createStore(CustomReducer, applyMiddleware(thunk))


//react thunk - it is the middleware
//            - it gives our action creator ability to return a function (which dispatches another action), instead of action