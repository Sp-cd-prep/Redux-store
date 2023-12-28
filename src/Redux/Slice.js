import { createSlice } from "@reduxjs/toolkit";
import data from '../Data'


const Slice = createSlice({
    name:'blog',
    initialState: {blogs:data, cart:[]},
    reducers:{
        addToCart:(state,action)=>{
            const itemToAdd = state.blogs.find(item=>item.id === action.payload )
            if(itemToAdd)
            state.cart.push(itemToAdd)
            console.log("payload",action.payload)
        }
    }
})

export const {addToCart} = Slice.actions
export default Slice.reducer