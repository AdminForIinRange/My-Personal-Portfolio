import { configureStore } from "@reduxjs/toolkit";

import ScreenSizeReducer from "./features/modal/ScreenSizeSlice.jsx";

export const store = configureStore({
  reducer: {
    screenSize: ScreenSizeReducer,
  },
});
