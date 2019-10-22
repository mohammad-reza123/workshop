//global scobe
let todos={
  list : [

    {
      text:"learn HTML",
      completed: false
    },
    {
      text:"learn CSS",
      completed: false
    },
    {
      text:"learn JS",
      completed: false
    },
    {
      text:"learn PHP",
      completed: false
    },
    
    ],
    displayTodos: function(){
      console.log(this.list);
    },
    addTodo: function(todoText){
      //new object in a key of the origin object
      let newTodo={
        text:todoText,
        complated:false
      }

      this.list.push(newTodo);
      this.displayTodos();
    },
    changeTodo:function(index, newText){
      this.list[index]=newText;
      this.displayTodos();
    },
    deleteTodo: function(index,item){
      this.list.splice(index, 1);
      this.displayTodos();
    },


    //toggle complated, it s mean switch the code!!!
    toggleTodo: function(index){
      let currentStatus= this.list[index].completed; //true or false
      this.list[index].completed= !currentStatus; 
      this.displayTodos();
    }

}//end objecte todo
// console.log(todos.List);
// todos.toggleTodo(1);
// todos.deleteTodo(2,1);
// todos.addTodo("cou cou");
// todos.addTodo("another cou cou");

// //todos.changeTodo(3, "hello im new");
// // console.log(todos.list[3]);
// todos.list[3].text="somthing else";
// console.log(todos.list[3]);

console.log(todos.list[3].text);

todos.list[2].completed=true;
console.log(todos.list[2]);
