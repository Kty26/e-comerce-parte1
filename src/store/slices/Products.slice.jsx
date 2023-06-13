import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    }
  }
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

// redux thunk / middlewares
// Se ejecutan entre el dispatch y la accion

{/*
export const myFunctionThunk = () => dispatch => {
    //Tareas a realizar
    dispatch( actionName1() )

    //Mas tareas
    dispatch( actionName2() )
}
*/}

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));

  axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/products")
    .then((resp) => {dispatch(setProducts(resp.data))
      console.log(resp.data);
    })
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)))
  //.finally(() => {}) -> metodo que se ejecuta cuando la promesa es resuelta (no importa si fue satisfactoria o rechazada)
};

export const filterCategoryThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));

  axios
   .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
    .then((resp) => dispatch(setProducts(resp.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterHeadlineThunk = (value) => (dispatch) => {
  dispatch(setIsLoading(true));

  axios
    .get(
      `https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${value}`
   )
   .then((resp) => dispatch(setProducts(resp.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};
