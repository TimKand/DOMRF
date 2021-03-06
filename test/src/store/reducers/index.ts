import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
    filterReducer
})

export type RootReducer = ReturnType<typeof rootReducer>
