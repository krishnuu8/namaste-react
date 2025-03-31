import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice" //we can name it anything since it is a default export
const store=configureStore({
    reducer:{cart:cartReducer}
})

export default store;