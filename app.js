const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

const completed = document.querySelector(".completedOption");
const uncompleted = document.querySelector(".uncompletedOption");
const all = document.querySelector(".allOption");


const allTodos = []; // created empty array

const addTodo = (event) => {
    event.preventDefault(); // page to not refresh

    if(todoInput.value.length <= 1){
        return; // to prevent adding empty inputs
    }

    const todoDivEl = document.createElement("div"); //El=element create new element after the input 
         todoDivEl.classList.add("todo"); // add class like the previous, already made in style.css

    const liEl = document.createElement("li");
        liEl.innerHTML = todoInput.value;  // input from the user to be added to the list

        allTodos.push(todoInput.value); // push values in the empty array

        liEl.classList.add("todo-item"); //add class like the previous, already made in style.css
        todoDivEl.appendChild(liEl); // add child to the div element

    const completedButton = document.createElement("button");
        completedButton.innerHTML = `<i class="fas fa-check"></i>`; // `backticks` above tab button, use it for icons, i= icon
        completedButton.classList.add("complete-btn");
        todoDivEl.appendChild(completedButton); // add element to the todoDiv

    const trashButton = document.createElement("button");
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`; // `backticks` above tab button, use it for icons, i= icon
        trashButton.classList.add("trash-btn"); //add class 
        todoDivEl.appendChild(trashButton); // add element to the todoDiv

        todoInput.value = ""; // to clear the input value after adding
        todoList.appendChild(todoDivEl); // add to the Div Todo 



}

const deleteTodo = (event) => {
   const element = event.target; // targeted element should be in const 

   if (element.classList[0] === "trash-btn"){
        const todo = element.parentElement; // create const
        todo.classList.add("fall");  // add class from style.css
        todo.addEventListener("transitionend", (event) => { // function after event transitioned remove todo. 
            todo.remove();                                      // transition`end` make sure when type simular to end the function with END
        })
   };
   if (element.classList[0] === "complete-btn"){
        const todo = element.parentElement;
        todo.classList.toggle("completed");// toogle is reversing. if class comleted is there than toggle delete the class if not toggle add the class
   }

}

const filterTodo = (event) => {
    const todos = todoList.childNodes; // childNodes property of the Node interface returns a live NodeList of child nodes of the given element

    todos.forEach((todo) => {  /// forEach-It calls a provided callbackFn function once for each element in an array in ascending-index order. 
        switch(event.target.value){ /// what will be clicked 
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){  // with ! before todo if there is no class completed show on or else dont
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }   
    })
}

// events
todoButton.addEventListener("click", addTodo);  // after click add event
todoList.addEventListener("click", deleteTodo); 
completed.addEventListener("click", filterTodo);
uncompleted.addEventListener("click", filterTodo);
all.addEventListener("click", filterTodo);

// const deleteTodo = (event) => 
//     console.log(event.target, "event") to check specific targeted element use this line of code.