import {combineReducers} from "redux";
import TodoReducer from "../slice/TodoSlice";



export const rootReducer = combineReducers({
    Todo: TodoReducer
})

export type RootState = ReturnType<typeof rootReducer>