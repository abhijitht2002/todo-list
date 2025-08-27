const todoForm = document.getElementById('todo-form')
const todoInput = document.getElementById('todo-input')
const todoAddButton = document.getElementById('todo-add')
const todoList = document.getElementById('todo-list')
const deleteTaskBtn = document.getElementsByClassName('delete-btn')



function addTask(){

    let task = todoInput.value
    console.log(task)
    if(task.trim() !== ""){
        let html = `<li><span>${task}</span><button class="delete-btn">Delete</button></li>`
        todoList.insertAdjacentHTML('beforeend', html)
        todoInput.value = ""
    }
}

function deleteTask(event){

    if(event.target.classList.contains('delete-btn')){
        event.target.parentElement.remove()
    }

}

todoAddButton.addEventListener('click', addTask)
todoList.addEventListener('click', deleteTask)