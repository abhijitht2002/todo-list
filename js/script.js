const todoForm = document.getElementById('todo-form')
const todoInput = document.getElementById('todo-input')
const todoAddButton = document.getElementById('todo-add')
const todoList = document.getElementById('todo-list')

// add task
function addTask(){

    let task = todoInput.value
    
    if(task.trim() !== ""){
        console.log(task)
        let html = `<li>
                        <input type="checkbox" class="task-check">
                        <span>${task}</span>
                        <i class="bi bi-pencil-square text-primary ms-2 edit-task" role="button"></i>
                        <div></div> 
                        <button class="delete-btn"><i class="bi bi-trash3-fill"></i></button>
                    </li>`
        todoList.insertAdjacentHTML('beforeend', html)
        todoInput.value = ""
    }
}

todoAddButton.addEventListener('click', addTask)


todoList.addEventListener('click', (event) => {

    const li = event.target.closest('li')
    const span = li.querySelector('span')

    // delete task
    if(event.target.classList.contains('delete-btn')){
        li.remove()
    }
    // edit task
    else if(event.target.classList.contains('edit-task')){
        
        const input = document.createElement('input')
        input.type = "text"
        input.value = span.textContent

        li.replaceChild(input, span)
        input.focus()
        
        input.addEventListener('blur', () => {

                const newSpan = document.createElement('span')
                input.value.trim() !== "" ? newSpan.textContent = input.value : newSpan.textContent = "Untitled task"
                li.replaceChild(newSpan, input)
        })

    }
    // strike task
    else if(event.target.classList.contains('task-check')){

        li.classList.toggle('striked', event.target.checked)

    }

})