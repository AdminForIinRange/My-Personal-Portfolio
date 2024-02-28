import { configureStore } from "@reduxjs/toolkit";

import ScreenSizeReducer from "./features/modal/ScreenSizeSlice.jsx";
import FormReducer from "./features/modal/FormSlice.jsx";

export const store = configureStore({
  reducer: {
    screenSize: ScreenSizeReducer,
    form: FormReducer,
  },
});
