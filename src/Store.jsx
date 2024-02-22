import { configureStore } from "@reduxjs/toolkit";

import ModalReducer from "./features/modal/modalSlice.jsx";

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
  },
});
