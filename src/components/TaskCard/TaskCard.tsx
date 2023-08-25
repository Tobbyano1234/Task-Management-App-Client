import { Fragment, useState } from "react";
import DeleteBtn from "../../assets/trash-svgrepo-com.svg";
import EditBtn from "../../assets/iconmonstr-pencil-text-filled.svg";
import CreateTaskModal from "../Modal/CreateModal";
import InputField from "../common/Input";
import Button from "../common/Button";
import DeleteModal from "../Modal/DeleteModal";
import TaskDetailsModal from "../Modal/TaskDetailsModal";

const TaskCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const openDetailsModal = () => {
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
  };

  const handleDelete = () => {
    // Implement your delete logic here
    console.log("Deleting task...");
    closeDeleteModal();
  };

  return (
    <Fragment>
      <main>
        <div className="container">
          {/* cards */}
          <div className="w-[20rem] h-auto shadow-xl rounded-md bg-white">
            <div className="mx-2  p-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between">
                  <p className="font-sans font-semibold text-xl capitalized">
                    Go Shopping
                  </p>
                  <div>
                    <img
                      src={EditBtn}
                      alt="bin"
                      className="w-5 h-5 cursor-pointer"
                      onClick={openModal}
                    />
                    <CreateTaskModal
                      isOpen={isModalOpen}
                      onRequestClose={closeModal}
                    >
                      <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
                      {/* Add your form fields here */}
                      {/* e.g., Title, Description, Due Date, etc. */}
                      {/* Include form elements and submit button */}
                      <form className="mt-6 space-y-6" action="#" method="POST">
                        <InputField
                          labelName="Title"
                          htmlFor="title"
                          labelClassName="block text-sm font-medium leading-6 text-gray-900"
                          type="text"
                          name="title"
                          placeholder="Enter task title"
                          required
                        />

                        <div className="mt-4">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Description
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            rows={4}
                            className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            // className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
                            placeholder="Enter task description"
                            required
                          />
                        </div>

                        <InputField
                          labelName="Due Date"
                          htmlFor="dueDate"
                          labelClassName="block text-sm font-medium leading-6 text-gray-900"
                          type="date"
                          name="dueDate"
                          required
                          placeholder={""}
                        />
                        <div>
                          <Button type="submit" title="Update Task" />
                        </div>
                      </form>
                    </CreateTaskModal>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="font-sans font-normal text-lg">
                    {"wwhhdehjrruitmnfdoirnf kjerjekjw nekkneri9r483kdmf ksdnjeh393085 nmxmsjxkalsjeiueurentns,dnvhgi3480383202dndms cllsjdifekreitns934856jwwhhdehjrruitmnfdoirnf kjerjekjw nekkneri9r483kdmf ksdnjeh393085 nmxmsjxkalsjeiueurentns,dnvhgi3480383202dndms cllsjdifekreitns934856j".substring(
                      0,
                      50
                    )}
                    {"wwhhdehjrruitmnfdoirnf kjerjekjw nekkneri9r483kdmf ksdnjeh393085 nmxmsjxkalsjeiueurentns,dnvhgi3480383202dndms cllsjdifekreitns934856jwwhhdehjrruitmnfdoirnf kjerjekjw nekkneri9r483kdmf ksdnjeh393085 nmxmsjxkalsjeiueurentns, dnvhgi3480383202dndms cllsjdifekreitns934856j"
                      .length > 50 && (
                      <span
                        className="text-indigo-600 cursor-pointer ml-1"
                        onClick={openDetailsModal}
                      >
                        View More
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-5 flex justify-between items-center">
                <p className="font-sans text-sm text-gray-500">4min ago</p>

                <div>
                  <img
                    src={DeleteBtn}
                    alt="bin"
                    className="w-5 h-5 cursor-pointer"
                    onClick={openDeleteModal}
                  />
                  {/* Delete Confirmation Modal */}
                  <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onRequestClose={closeDeleteModal}
                    onConfirm={handleDelete}
                    confirmButtonText="Delete"
                    cancelButtonText="Cancel"
                    title="Delete Task"
                  >
                    Are you sure you want to delete this task?
                  </DeleteModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <TaskDetailsModal
        isOpen={isDetailsModalOpen}
        onRequestClose={closeDetailsModal}
        title={"andjhfjf"}
        description={
          "wwhhdehjrruitmnfdoirnf kjerjekjw nekkneri9r483kdmf ksdnjeh393085 nmxmsjxkalsjeiueurentns, dnvhgi3480383202dndms cllsjdifekreitns934856j wwhhdehjrruitmnfdoirnf kjerjekjw nekkneri9r483kdmf ksdnjeh393085 nmxmsjxkalsjeiueurentns, dnvhgi3480383202dndms cllsjdifekreitns934856j wwhhdehjrruitmnfdoirnf kjerjekjw nekkneri9r483kdmf ksdnjeh393085 nmxmsjxkalsjeiueurentns, dnvhgi3480383202dndms cllsjdifekreitns934856j"
        }
      />
    </Fragment>
  );
};

export default TaskCard;
