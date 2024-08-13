const Todolist = [{
    name: 'make dinner',
    dueDate: '2023-12-06'
}, {
    name: 'watch youtube',
    dueDate: '2023-12-22'
}];

function addTodo() {
    const nameInputElement = document.querySelector('.js-name-input');
    const name = nameInputElement.value;

    const duedateInputElement = document.querySelector('.js-duedate-input');
    const duedate = duedateInputElement.value;

    if (name != '' && duedate != '') {

        Todolist.push({
            name: name,
            dueDate: duedate
           
        });
        console.log(Todolist);
        nameInputElement.value = '';
        renderTodolist();

    } else {
        alert("Add all the inputs correctly!");
    }

}


function renderTodolist() {

    let todolist = '';
    
    for (let i = 0; i < Todolist.length; i++) {
        const todoObject = Todolist[i];
       // const name = todoObject.name;
       // const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;
        const html = `
      
               <div>${name}</div> 
               <div>${dueDate}</div> 
               <button onclick="
                    Todolist.splice(${i}, 1);
                    renderTodolist();
                " class="delete-todo-button">Delete</button>
          
        `;
        todolist += html;
    
    }
    console.log(todolist);
    document.querySelector('.js-todolist').innerHTML = todolist;

}