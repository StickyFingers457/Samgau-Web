import { createSlice } from "@reduxjs/toolkit";

//import {  } from "module";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        } ,
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(good => good.id !== action.payload)
        }
    }
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;











