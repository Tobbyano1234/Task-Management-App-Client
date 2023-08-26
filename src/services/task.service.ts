import { AxiosError } from "axios";
import axios from "../utils/API";


export const createTaskService = async (taskDTO: ITask) => {
    try {
        const res = await axios.post("/task", taskDTO);
        return res.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            return err.response?.data;
        }
    }
};

export const updateTaskService = async (taskDTO: ITask) => {
    try {
        const res = await axios.put(`/task/${taskDTO._id}`, {...taskDTO});
        return res.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            return err.response?.data;
        }
    }
};

export const deleteTaskService = async (taskID: string|undefined) => {
    try {
        const res = await axios.delete(`/task/${taskID}`);
        return res.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            return err.response?.data;
        }
    }
};

export const getTaskByIdService = async (taskID: string) => {
    try {
        const res = await axios.get(`/task/${taskID}`);
        return res.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            return err.response?.data;
        }
    }
};

export const getAllUserTasksService = async () => {
    try {
        const res = await axios.get(`/task`);
        return res.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            return err.response?.data;
        }
    }
};
