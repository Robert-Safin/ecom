import { createSlice } from "@reduxjs/toolkit"



// Define a type for the slice state
interface CartState {
  randomNumber: number
}

// Define the initial state using that type
const initialState: CartState = {
  randomNumber: Math.random()
}


export const cartSlice = createSlice({
  name: 'cartSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    regenerateRandomValue: (state) => {
      state.randomNumber = Math.random()
    },
  },
})

export const { regenerateRandomValue } = cartSlice.actions

export default cartSlice.reducer
