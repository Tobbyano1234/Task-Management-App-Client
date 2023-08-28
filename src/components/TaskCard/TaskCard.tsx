import { Fragment, useState } from "react";
import { toast } from "react-toastify";

import DeleteBtn from "../../assets/trash-svgrepo-com.svg";
import EditBtn from "../../assets/iconmonstr-pencil-text-filled.svg";
import CreateTaskModal from "../Modal/CreateModal";
import InputField from "../common/Input";
import Button from "../common/Button";
import DeleteModal from "../Modal/DeleteModal";
import TaskDetailsModal from "../Modal/TaskDetailsModal";
import {
  deleteTaskService,
  updateTaskService,
} from "../../services/task.service";

const TaskCard = (props: { task: ITask }) => {
  const task = props.task as ITask;
  const { task: initialTaskData } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState<boolean>(false);
  const [updateTaskData, setUpdateTaskData] = useState<ITask>(initialTaskData);
  const [loading, setLoading] = useState<boolean>();
  const [charCount, setCharCount] = useState<number>(
    initialTaskData.description.length
  );
  const [description, setDescription] = useState<string>(
    initialTaskData.description
  );

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

  const handleDelete = async (taskID: string | undefined) => {
    try {
      const { message } = await deleteTaskService(taskID);
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      closeDeleteModal();
    } catch (error: any) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "description") {
      if (value.length <= 500) {
        setDescription(value);
        setCharCount(value.length);
      }
    } else {
      setUpdateTaskData((prevTaskData) => ({
        ...prevTaskData,
        [name]: value,
      }));
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    try {
      setLoading(true);
      const taskDTO = { _id: task._id, ...updateTaskData };
      const res = await updateTaskService(taskDTO);
      const { statusCode, message } = res;
      if (statusCode === 200) {
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
        });
        closeModal();
      } else {
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
        });
        closeModal();
      }
    } catch (error) {
      toast.error("Failed to update task", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="w-[20rem] h-44 leading-tight shadow-xl rounded-md bg-white">
            <div className="mx-2  p-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between">
                  <p className="font-sans font-semibold text-xl capitalized">
                    {task.title}
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
                      <form className="mt-6 space-y-6" onSubmit={handleUpdate}>
                        <InputField
                          labelName="Title"
                          htmlFor="title"
                          labelClassName="block text-sm font-medium leading-6 text-gray-900"
                          type="text"
                          name="title"
                          placeholder="Enter task title"
                          required
                          onChange={handleChange}
                          value={task.title}
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
                            placeholder="Enter task description"
                            onChange={handleChange}
                            value={description }
                            required
                          />
                          <p className="text-xs mt-1 text-gray-500">
                            Character Count: {charCount} / 500
                          </p>
                          {charCount > 500 && (
                            <p className="text-xs mt-1 text-red-500">
                              Description should not exceed 500 characters.
                            </p>
                          )}
                        </div>

                        <InputField
                          labelName="Due Date"
                          htmlFor="dueDate"
                          labelClassName="block text-sm font-medium leading-6 text-gray-900"
                          type="date"
                          name="dueDate"
                          value={
                            new Date(task.dueDate).toISOString().split("T")[0]
                          }
                          required
                          onChange={handleChange}
                          placeholder={""}
                        />

                        <div my-1>
                          <label
                            htmlFor="status"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Status
                          </label>
                          <select
                            id="status"
                            className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            name="status"
                            value={updateTaskData.status}
                            onChange={handleChange}
                          >
                            <option value="todo">Todo</option>
                            <option value="inprogress">In Progress</option>
                            <option value="completed">Completed</option>
                          </select>
                        </div>

                        <div>
                          <Button
                            type="submit"
                            title={loading ? "Loading..." : "Update Task"}
                            disabled={loading}
                          />
                        </div>
                      </form>
                    </CreateTaskModal>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="font-sans font-normal text-lg text-ellipsis overflow-hidden ...">
                    {task.description.substring(0, 50)}
                    {task.description.length > 50 && (
                      <span
                        className="text-indigo-600 cursor-pointer ml-1"
                        onClick={openDetailsModal}
                      >
                        ... View More
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
                    onConfirm={() => handleDelete(task?._id)}
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
        title={task.title}
        description={task.description}
      />
    </Fragment>
  );
};

export default TaskCard;
