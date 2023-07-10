import { createStore } from "redux";
import { CounterReducer } from "./counterReducer";



export var CounterStore = createStore(CounterReducer)