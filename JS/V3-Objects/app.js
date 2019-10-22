let Todos={
  List : [
    "learn HTML",
     "learn CSS",
     "learn JS",
     "learn PHP" 
    ],
    displayTodos: function(){
      console.log(this.List);
    },
    addTodo: function(todoText){
      this.List.push(todoText);
      this.displayTodos();
    },
    changeTodo:function(index, newText){
      this.List[index]=newText;
      this.displayTodos();
    },
    deleteTodo: function(index,item){
      this.List.splice(index, 1);
      this.displayTodos();
    },

} //end object todos
console.log(Todos.List);
Todos.addTodo("new todo");
Todos.deleteTodo(2,1);
// changeTodo(2, "my todo");
Todos.changeTodo(0, "somthing like that");

//"return" every thing after return ignored

