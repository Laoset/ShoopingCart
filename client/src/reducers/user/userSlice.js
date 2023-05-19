import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  fullName: '',
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    //Actualizo mi estado inicial con lo que viene del payload correspondiente
    setUser: (state, action) => {
        state.email= action.payload.email;
        state.fullName= action.payload.fullName;
        state.token= action.payload.token;
    },
    //Con esto reincio el estado del usuario, quiza un logOut
    unsetUser: (state) => {
        state.email= ''
        state.fullName= ''
        state.token= ''
    }
  }
})

// El nombre de mis actions creator!
export const { setUser, unsetUser} = userSlice.actions
//Esto exporta todooo mi reducer
export default userSlice.reducer