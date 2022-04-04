import { CreateTaskObject } from "./main.js";
import { createTask, TASK_SPACE } from "./view.js";


export const storage = {
    initializeData: () => {
        if (localStorage.getItem('list') === null) {
            const taskList = new Set();
            localStorage.setItem('list', JSON.stringify(Array.from(taskList)));
        }
    },
    getTaskList: () => {
        const taskList = localStorage.getItem('list');
        return new Set(JSON.parse(taskList));
    },
    addNewTask: (taskName,priority) => {
        const taskList = storage.getTaskList();
        const task = new CreateTaskObject(taskName, priority);
        taskList.add(task);
        localStorage.setItem('list', JSON.stringify(Array.from(taskList)));
    },
    renderTasks: () => {
        const taskList = storage.getTaskList();
        for (let item of taskList) {
            let taskUI = createTask(item.name);
            TASK_SPACE[item.priority].append(taskUI);
        }
    },
    removeTask: (name) => {
        const taskList = storage.getTaskList()
        for (let item of taskList) {
            if (item.name === name) {
                taskList.delete(item)
            }
        }
        localStorage.setItem('list', JSON.stringify(Array.from(taskList)));
    }
}