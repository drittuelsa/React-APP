
import { applyMiddleware, createStore } from "redux";
import { ReducerFile } from "./reducer";
import thunk from "redux-thunk";


export var StoreData = createStore(ReducerFile, applyMiddleware(thunk))