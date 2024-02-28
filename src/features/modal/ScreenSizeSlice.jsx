import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSmallScreen: null,
};

export const calculateScreenSize = () => (dispatch) => {
  const isSmallScreen = window.innerWidth < 768;
  if (isSmallScreen){
    dispatch(setIsSmallScreen(true));

  } else{
    dispatch(setIsSmallScreen(false));
  }
  
};

const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setIsSmallScreen(state, action) {
      state.isSmallScreen = action.payload;
    },
  },
});

export const { setIsSmallScreen } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
