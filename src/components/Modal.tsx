"use client"; // This line is essential

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/pages/store";
import { closeModal } from "@/app/pages/store/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
        <p>Modal Content Here...</p>
        <button
          onClick={() => dispatch(closeModal())}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
