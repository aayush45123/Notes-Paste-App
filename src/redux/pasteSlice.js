import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created Succesfully..");
    },
    updatePastes: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex(
        (paste) => paste._id === updatedPaste._id
      );
      if (index >= -1) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully.");
      } else {
        toast.error("Paste not found.");
      }
    },
    resetPastes: (state, action) => {
      state.pastes = [];

      localStorage.removeItem("pastes");
    },
    removePastes(state, action) {
      const idToRemove = action.payload; // This is just an ID string
      const index = state.pastes.findIndex((paste) => paste._id === idToRemove);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Deleted");
      } else {
        toast.error("Paste not found");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPastes, updatePastes, resetPastes, removePastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
