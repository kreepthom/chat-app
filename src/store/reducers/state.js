import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    register: false,
    id:0,
    name: 'joy',
    color: '',
    listusers: [],
    chatActive: null,
}
const state = createSlice({
    name: 'state',
    initialState,
    reducers: {
        handleRegister: (state) => {
            state.register = !state.register
        },
        handleName: (state, actions) => {
            state.name = actions.payload
        },
        handleListUsers: (state, actions) => {
            state.listusers = [...state.listusers, ...actions.payload]
        },
        handleId:(state,actions) => {
            state.id = actions.payload
        },
        handleState:(state,actions)=>{
            state = actions.payload
        }
    }
})

export const { 
    handleRegister,
    handleName,
    handleId,
    handleState,
    handleListUsers, } = state.actions
export default state.reducer