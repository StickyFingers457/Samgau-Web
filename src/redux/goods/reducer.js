import { createSlice } from '@reduxjs/toolkit'

const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    currentGame: null
  },
  reducers: {
    setCurrentGood: (state, action) => {
      state.currentGame = action.payload
    },
  }
});

export const { setCurrentGame } = goodsSlice.actions;
export default goodsSlice.reducer;