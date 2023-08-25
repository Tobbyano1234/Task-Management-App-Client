import { Fragment } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import TaskList from "../components/TaskList";
import Button from "../components/common/Button";

const Dashboard = () => {
  return (
    <Fragment>
      <main>
        <div className="w-full min-h-[60px] shadow-lg flex items-center justify-between px-5">
          <div className="font-sans font-semibold text-2xl text-indigo-600">
            TASK MANAGER
          </div>
          <div className="flex flex-row space-x-5 items-center">
            <div className="flex items-center gap-x-3">
              <UserCircleIcon
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
            </div>

            <p>Hi Tobi</p>

            <Button
              className="bg-indigo-600 font-custom text-sm text-white rounded-lg px-5 py-2 hover:bg-indigo-900"
              type="submit"
              title="Logout"
            />
          </div>
        </div>

        <section>
          <TaskList />
        </section>
      </main>
      {/* Include your TaskList component */}
    </Fragment>
  );
};

export default Dashboard;
