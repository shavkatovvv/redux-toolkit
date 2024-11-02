import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
};

export const crudReducer = createSlice({
    name: "crud",
    initialState,
    reducers: {
        add: (state, action) => {
            return { ...state, users: [...state.users, action.payload] };
        },

        deleteTask: (state, action) => {
            const delUSers = state.users.filter(
                (item) => item.id !== action.payload
            );
            return { ...state, users: delUSers };
        },
    },
});

export default crudReducer.reducer;

export const { add, deleteTask } = crudReducer.actions;
