import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
    orderDara: [],
};

export const shoppingSlice = createSlice({
    name: "shoping",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            state.productData = action.payload;
        },
    },
});

export const { addToCart } = shoppingSlice.actions;
export default shoppingSlice.reducer;