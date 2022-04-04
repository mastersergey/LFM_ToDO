import {STATUS} from './main.js';
import { storage } from './localStorage.js'
let list = [];

export const TASK_SPACE = {
    HIGH: document.querySelector('.task__space-high'),
    LOW: document.querySelector('.task__space-low'),
}

const DEFAULT_TASK = document.getElementById('TASK').content;
storage.renderTasks()


const FORM = {
    HIGH: document.getElementById('HIGH_FORM'),
    LOW: document.getElementById('LOW_FORM'),
}

const INPUT = {
    HIGH: document.querySelector('.high__input'),
    LOW: document.querySelector('.low__input'),
}


function pushNewTask(priority) {
    const emptyValue = '';
    const isInputEmpty = INPUT[priority].value !== emptyValue;
    if(isInputEmpty) {
        let taskText = INPUT[priority].value;
        storage.addNewTask(taskText, priority);
        TASK_SPACE[priority].append(createTask(taskText));
        INPUT[priority].value = emptyValue;
        FORM[priority].classList.remove('empty__input');
        INPUT[priority].placeholder = 'Добавить важных дел';
    } else {
        FORM[priority].classList.add('empty__input')
        INPUT[priority].placeholder = 'Type task!'
    }
}



function taskActions(event) {
    if (event.target.classList.contains('close__btn')) {
        storage.removeTask(event.target.previousElementSibling.textContent)
        event.target.parentNode.remove()
    } else if (event.target.classList.contains('checkbox')) {
        if(event.target.checked) {
            event.target.closest('.task').classList.add('checked__task')
        } else {
            event.target.closest('.checked__task').className = 'task';
        }
    }
}


export function createTask(text) {
    let newTask = DEFAULT_TASK.cloneNode(true);
    newTask.querySelector('p').textContent = text;;
    return newTask;
}



function addTask(event) {
    event.preventDefault();
    if (event.target === FORM.HIGH) {
        pushNewTask('HIGH')
    } else if (event.target === FORM.LOW) {
        pushNewTask('LOW')
    }
}


    TASK_SPACE['HIGH'].addEventListener('click', taskActions)
    TASK_SPACE['LOW'].addEventListener('click', taskActions)

for (let priority in FORM) {
    FORM[priority].addEventListener('submit', addTask);
}



console.log(list)


