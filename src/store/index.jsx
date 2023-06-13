import { configureStore } from "@reduxjs/toolkit"
import isLoading from "./slices/isLoading.slice"
import products from "./slices/Products.slice"

export default configureStore({
  reducer: {
    isLoading,
    products
  }
})