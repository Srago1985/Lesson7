const task = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

task.onkeyup = function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
}

addTaskButton.onclick = addTask;

function addTask() {
    const text = task.value.trim();
    if (text) {
        const li = document.createElement('li');
        const buttonDelete = document.createElement('button');
        buttonDelete.append('Delete');
        buttonDelete.onclick = function (e) {
            e.target.parentElement.remove();
        }
        li.append(text, buttonDelete);
        taskList.append(li);
    }
    task.value = '';
}
