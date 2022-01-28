const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();

};
function addTask(description) {
    const taskContainer = document.createElement('div');
    const newtask = document.createElement('input');
    const taskLabel =document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newtask.setAttribute('type', 'checkbox');
    newtask.setAttribute('name', description);
    newtask.setAttribute('id', description);

    taskLabel.setAttribute('for',description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newtask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);

}