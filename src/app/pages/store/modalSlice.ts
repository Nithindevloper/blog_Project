import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  modalType: "signin" | "signup" | null; // Type to determine modal content
}

const initialState: ModalState = {
  isOpen: false,
  modalType: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<"signin" | "signup">) => {
      state.isOpen = true;
      state.modalType = action.payload; // Set modal type to signin or signup
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
