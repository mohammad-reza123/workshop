//global scobe
let todos={
  list : [

    {
      text:"learn HTML",
      completed: false
    },
    {
      text:"learn CSS",
      completed: true
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

//alert if i havent any list
    displayTodos: function(){
      if(this.list.length==0){
        console.log("dont have any todos!");
      }


      this.list.forEach(function(item) {
        let completedstr= (item.completed)? "(x)" : "( )";
        console.log(completedstr, item.text);
      } );
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
    

}; //end objecte todo

todos.displayTodos();



// Todos.addTodo("new todo");
// Todos.deleteTodo(2,1);

// changeTodo(2, "my todo");
// changeTodo(0, "somthing like that");


