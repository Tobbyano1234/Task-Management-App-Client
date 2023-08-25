import { Fragment, useState } from "react";
import TaskCard from "./TaskCard/TaskCard";
import Button from "./common/Button";
import CreateTaskModal from "./Modal/CreateModal";
import InputField from "./common/Input";

const TaskList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <main className="my-5 px-5">
        <div className="flex items-center justify-between space-x-4">
          <Button
            className="bg-indigo-600 font-custom text-sm text-white rounded-lg px-5 py-2 hover:bg-indigo-900"
            type="submit"
            title="Create Task"
            onClick={openModal}
          />

          <CreateTaskModal isOpen={isModalOpen} onRequestClose={closeModal}>
            <h2 className="text-lg font-semibold mb-4">Create New Task</h2>
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
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
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

              {/* Add more input fields for completionDate and status */}
              {/* Remember to customize according to your needs */}

              <div>
                <Button type="submit" title="Create Task" />
              </div>
            </form>
          </CreateTaskModal>
          <div className="flex items-center border rounded-md p-2">
            <input
              type="text"
              className="w-[200px] outline-none"
              placeholder="Search..."
            />
            <button className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M8 15a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
            </button>
          </div>

          {/* Filtering and Sorting options */}
          <div className="flex space-x-4">
            <div>
              <label htmlFor="filter" className="text-gray-500">
                Filter by:
              </label>
              <select
                id="filter"
                className="block w-24 mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
              >
                <option>All</option>
                <option>Completed</option>
                <option>Not Completed</option>
              </select>
            </div>

            <div>
              <label htmlFor="sort" className="text-gray-500">
                Sort by:
              </label>
              <select
                id="sort"
                className="block w-24 mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
              >
                <option>Latest</option>
                <option>Oldest</option>
                <option>Name</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border-t-2 my-5 border-gray-200"></div>
        <div className="flex flex-wrap gap-2 justify-center">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
</div>
      </main>
    </Fragment>
  );
};

export default TaskList;
