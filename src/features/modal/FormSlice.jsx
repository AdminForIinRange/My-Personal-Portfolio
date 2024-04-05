import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../Config/Firebase";

const ContactCollectionRef = collection(db, "Contacts");

export const ContactMe = createAsyncThunk(
  "auth/ContactMe",
  async ({ name, email, message }, { rejectWithValue }) => {
    try {
      await addDoc(ContactCollectionRef, {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(ContactMe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ContactMe.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(ContactMe.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export default formSlice.reducer;
