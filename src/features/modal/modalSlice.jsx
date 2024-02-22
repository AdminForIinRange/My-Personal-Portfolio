import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModalAction: (state) => {
      state.showModal = true;
    },
    hideModalAction: (state) => {
        state.showModal = false


    }
  },
});


export const {showModalAction, hideModalAction} = modalSlice.actions
export default modalSlice.reducer