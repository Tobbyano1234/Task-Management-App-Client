import { Fragment, useEffect, useState } from "react";
import TaskCard from "./TaskCard/TaskCard";
import Button from "./common/Button";
import CreateTaskModal from "./Modal/CreateModal";
import InputField from "./common/Input";
import { toast } from "react-toastify";
import {
  createTaskService,
  getAllUserTasksService,
} from "../services/task.service";
import { useAppSelector } from "../hooks/redux.hooks";

const TaskList = () => {
  const { user } = useAppSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>("Latest");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [formData, setFormData] = useState<ITask>({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    try {
      setLoading(true);
      const res = await createTaskService({ userID: user?._id, ...formData });
      const { statusCode, message } = res;
      if (statusCode === 201) {
        console.log("toast");
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
        });
        closeModal();
      } else {
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error("Failed to create task", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getUserTasks = async () => {
      try {
        const { payload } = await getAllUserTasksService();
        setTasks(payload);
      } catch (error) {
        toast.error("Failed to fetch tasks", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    };
    getUserTasks();
  }, [tasks]);

  // Filter logic
  const filteredTasks = tasks.filter((task) => {
    if (selectedFilter === "All") {
      return true;
    } else if (selectedFilter === "Todo") {
      return task.status !== "completed" && task.status !== "inprogress";
    } else if (selectedFilter === "In Progress") {
      return task.status !== "completed" && task.status !== "todo";
    } else {
      return task.status === "completed";
    }
  });

  // Search logic
  const searchedTasks = filteredTasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting logic
  const sortedTasks = [...searchedTasks].sort((a, b) => {
    if (selectedSort === "Latest") {
      const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return bDate - aDate;
    } else if (selectedSort === "Oldest") {
      const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return aDate - bDate;
    } else if (selectedSort === "Name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

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
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <InputField
                labelName="Title"
                htmlFor="title"
                labelClassName="block text-sm font-medium leading-6 text-gray-900"
                type="text"
                name="title"
                placeholder="Enter task title"
                onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
                placeholder={""}
              />

              <div>
                <Button
                  type="submit"
                  title={loading ? "Loading..." : "Create Task"}
                  disabled={loading}
                />
              </div>
            </form>
          </CreateTaskModal>
          <div className="flex items-center border rounded-md p-2">
            <input
              type="text"
              className="w-[200px] outline-none"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label htmlFor="sort" className="text-gray-500">
                Sort by:
              </label>
              <select
                id="sort"
                className="block w-24 mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="Name">Name</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border-t-2 my-5 border-gray-200"></div>
        <div className="flex flex-wrap gap-2 justify-center">
          {sortedTasks.map((task, idx) => (
            <TaskCard key={idx} task={task} />
          ))}
        </div>
      </main>
    </Fragment>
  );
};

export default TaskList;
