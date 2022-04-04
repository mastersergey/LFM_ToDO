export const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

export const PRIORITY = {
    LOW: 'LOW',
    HIGH: 'HIGH',
}

 

function changeStatus (task) {
    let currentTask = list.find(item => item.name === task.closest('p').textContent)
    currentTask.status = currentTask.status === STATUS.TO_DO ? STATUS.DONE : STATUS.TO_DO;
}

function changePriority (task, priority) {
    let currentTask = list.find(item => item.name === task);
    currentTask.priority = priority;
}

function pushTaskInArray (task, priority) {
    const defaultTask = {
        name: task,
        status: STATUS.TO_DO,
        priority: PRIORITY[priority],
    };
    list.push(defaultTask);
}

export function CreateTaskObject(name, priority) {
    this.name = name;
    this.status = STATUS.TO_DO;
    this.priority = PRIORITY[priority];
}





