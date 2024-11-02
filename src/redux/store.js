import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./crud-slice";
import { loadState, saveState } from "../config/storage";

export const store = configureStore({
    reducer: {
        task: crudReducer,
    },
    preloadedState: {
        task: loadState("task"),
    },
});

store.subscribe(() => {
    saveState("task", store.getState().task);
});
