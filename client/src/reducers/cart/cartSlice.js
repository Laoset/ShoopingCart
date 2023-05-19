import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalCount: 0,
  productsList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    //Cuando se ejecute el reducer, trae todo el state de productos y le agrega el que viene por payload
    addProductToCart: (state, action) =>{
        state.productsList = [...state.productsList, action.payload];
        state.totalCount += 1;
    },
    removeProductFromCart: (state, action) =>{
      //Me guardo el id que viene por payload
      const productId = action.payload;
      //Resto 1 porque borre de mi estado 
      state.totalCount -=1
      //Devuelve todo menos los productos que sean iguales al ID pasado como payload
      state.productsList = state.productsList.filter(product => product.id !== productId)
  }
  }
})

// El nombre de mis actions creator!
export const { addProductToCart, removeProductFromCart} = cartSlice.actions
//Esto exporta todooo mi reducer
export default cartSlice.reducer