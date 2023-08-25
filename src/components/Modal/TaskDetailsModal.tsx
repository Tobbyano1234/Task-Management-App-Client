import React from "react";

interface TaskDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  description: string;
}

const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({
  isOpen,
  onRequestClose,
  title,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-opacity-75 backdrop-blur-sm">
      <div className="bg-white max-w-[24rem] rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="flex justify-end">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-3 py-1"
            onClick={onRequestClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
