//my todos- Golobal scobe
let todoList = [
  "learn HTML",
  "learn CSS",
  "learn JS",
  "learn PHP"
 ];

console.log(todoList)
todoList[2]="learn JavaS"

//Display todos 
function displayTodos(){
  console.log(todoList);
}

// displayTodos()


//add todo
//-----------------------------------------------------------
//display todos
function displayTodos(){
  console.log(todoList);
}
displayTodos();

//add todo
function addTodo(todoText){
  todoList.push(todoList);
  displayTodos();
}
addTodo("Do that!")
//addTodo("Do this!");
//addTodo("do not do that!");

//change todo
function changeTodo(index, newText){
  todoList[index]=newText;
  displayTodos();
}
changeTodo(2, "my todo");
changeTodo(0, "somthing like that");

//delete todo
function deleteTodo(index,item){
  todoList.splice(index, 1);
  displayTodos();
}
deleteTodo(2,1);