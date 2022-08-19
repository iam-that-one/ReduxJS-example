import { configureStore, createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'list',
    initialState: {list : ["Abdullah","Ali"]},
    reducers:{
        addToList(state,action){
            state.list.push(action.payload)
        },
        deleteItem(state,action){
         state.list = state.list.filter((item)=> item !== action.payload)
        }
    }
})

export const actions = listSlice.actions
const store = configureStore({
    reducer: listSlice.reducer
})

export default store