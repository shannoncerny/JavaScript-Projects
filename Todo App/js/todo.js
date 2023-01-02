//gets task from input
function get_todos() {
    //creates array of tasks that are inputed
    var todos = new Array;
    //pulls the task that was saved in web browser memory
    var todos_str = localStorage.getItem('todo');
    //if input is not null, JSON.parse will communicate with web broswer
    //to make the task a JavaScript object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//adds the inputed task to the get_todos function array
function add() {
    //takes the inputed task and creates a variable of it
    var task = document.getElementById('task').value;
    var todos = get_todos();
    //adds a new task at the end of array
    todos.push(task);
    //converts the task input to JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

//keeps the tasks permanently displayed on the screen
function show() {
    //sets the task that was retrieved as a variable
    var todos = get_todos();
    //sets up each task as an unordered list
    var html = '<ul>';
    //displays a task to the list in the order that is inputed
    for (var i = 0; i < todos.length; i++) {
        //also displays the task as a list and creates a button with the 'x'
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '<ul>';
    //displays the task as a list
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
//displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
//this keeps the inputs displayed permanently on screen
show();

//creates functionality of removing todo item from array
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    //looks in show() for how to display removed item on screen
    show();

    return false;
}