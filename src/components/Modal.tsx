"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/pages/store";
import { closeModal } from "@/app/pages/store/modalSlice";
import Signup from "@/app/pages/auth/signup";
import Signin from "@/app/pages/auth/signin";
import { useEffect } from "react";

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, modalType } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    console.log("Modal isOpen changed:", isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {/* Display the appropriate component based on modalType */}
        {modalType === "signin" ? <Signin /> : <Signup />}

        <button
          onClick={() => {
            console.log("Closing modal...");
            dispatch(closeModal());
          }}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;