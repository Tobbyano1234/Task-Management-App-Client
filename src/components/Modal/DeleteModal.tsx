import React from "react";

interface DeleteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
  confirmButtonText: string;
  cancelButtonText: string;
  title: string;
  children: React.ReactNode;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,
  confirmButtonText,
  cancelButtonText,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-opacity-75 backdrop-blur-sm">
      <div className="bg-white w-96 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="mb-4">{children}</p>
        <div className="flex justify-end">
          <button
            className="text-gray-400 hover:text-gray-600 mr-2"
            onClick={onRequestClose}
          >
            {cancelButtonText}
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-3 py-1"
            onClick={onConfirm}
          >
            {confirmButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
