//global scobe
let todos={
  list : [

    {
      text:"learn HTML",
      completed: true
    },
    {
      text:"learn CSS",
      completed: false
    },
    {
      text:"learn JS",
      completed: true
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
    },
    
    //Toggle ALL
    toggleAll: function(){

      //completed items ITIT
      let completedItems = 0;
      //how many todos i have
      let totaltodos= this.list.length; console.log("total todos: ",totaltodos);
      //1.check what items are completed (true)
      this.list.forEach(function(item){
        if(item.complated){
          completedItems++; //u can use this way to =>> completedItems +=1;

        }
      });
      console.log("DONE : ", completedItems);
      //2. IF nothing is completed check them all 
      //version 1.---------------------------------
      // or IF we have completed items => check them all
      // if(completedItems==0 || (completedItems >0 && completedItems != totaltodos)){
      //   console.log("check them all");
     // else{
      //   console.log("Uncheck them all!");
      // }
    //}
     
      //version 2-----------------------------------+++++++++++++++++++++++++++++++++++++++++++++++ 
      // if(completedItems >= 0 && completedItems != totaltodos){
      //   if(completedItems != totaltodos){
      //     console.log("check them all");
      //   }
      // }
      // else{
      //   console.log("Uncheck them all!");
      // }

     //version 3
      if(completedItems == totaltodos){
        this.list.forEach(function(item){
         item.complated = false;
          });
      }
      else{
        this.list.forEach(function(item){
          item.complated = true;
        });
      }
      this.displayTodos();
      
    }

}; //end objecte todo

// todos.displayTodos();
todos.displayTodos();
//todos.toggleAll();

// Todos.addTodo("new todo");
// Todos.deleteTodo(2,1);

// changeTodo(2, "my todo");
// changeTodo(0, "somthing like that");


