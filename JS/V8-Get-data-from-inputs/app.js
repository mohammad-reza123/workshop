//global scobe
let todos={
  list : [

    {
      text:"learn HTML",
      completed: true
    },
    {
      text:"learn CSS",
      completed: true
    },
    {
      text:"learn JS",
      completed: true
    },
    {
      text:"learn PHP",
      completed: true
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
      console.log("------------------------");  
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
      let totalTodos= this.list.length; console.log("total todos: ",totalTodos);
      //1.check what items are completed (true)
      this.list.forEach(function(item){
        if(item.completed){
          completedItems++; //u can use this way to =>> completedItems +=1;

        }
      });
      // console.log("DONE : ", completedItems);
     //version 3
      if(completedItems == totalTodos){
        this.list.forEach(function(item){
         item.completed = false;
          });
      }
      else{
        this.list.forEach(function(item){
          item.completed = true;
        });
      }
      this.displayTodos();
      
    }

}; //end objecte todo

//start object hanler
let handlers={

  //handler add for adding todo
  addTodo:function(){
    const inputAdd = document.getElementById("inputAdd");

      if(inputAdd.value!= ''){
      todos.addTodo(inputAdd.value);
      inputAdd.value='';
    }
    else{
      alert("please put your enjoy in the case");
    }
  },

  //toggle todos
  toggleTodo:function(){
    const inputToggle = document.getElementById("inputToggle");

    if(inputToggle.value!= ''){
    todos.toggleTodo(inputToggle.value);
    inputToggle.value='';
  }
  else{
    alert("please put your enjoy in the case");
  }
  },
  //delete todo
  deleteTodo :function(){
    const inputDelete = document.getElementById("inputDelete");

    if(inputDelete.value!= ''){
    todos.deleteTodo(inputDelete.value);
    inputDelete.value='';
  }
  else{
    alert("please put your enjoy in the case");
  }
  }
}

//link your html buttons
const btnDisplay = document.getElementById("btnDisplay");
// const btnToggleAll = document.getElementById("btnToggleAll");

//display todos BTN

btnDisplay.addEventListener('click', function(){
  todos.displayTodos();
});

//toggle todos BTN

// btnToggleAll.addEventListener('click', function(){
//   todos.toggleAll();
// });

//add todos btn and input
// const btnAdd = document.getElementById("btnAdd");

// btnAdd.addEventListener('click', function(){
//   const inputAdd = document.getElementById("inputAdd");

//   if(inputAdd.value!= ''){
//   todos.addTodo(inputAdd.value);
//   inputAdd.value='';
// }
// else{
//   alert("please put your enjoy in the case");
// }
// });

//toggle todos---------------------------------
// const inputToggle = document.getElementById("btnToggle");

// btnToggle.addEventListener('click', function(){
//   const inputToggle = document.getElementById("inputToggle");

//   if(inputToggle.value!= ''){
//   todos.toggleTodo(inputToggle.value);
//   inputToggle.value='';
// }
// else{
//   alert("please put your enjoy in the case");
// }
// });
//delete todos-----------------------------
// const inputDelete = document.getElementById("btnDelete");

// btnDelete.addEventListener('click', function(){
//   const inputDelete = document.getElementById("inputDelete");

//   if(inputDelete.value!= ''){
//   todos.deleteTodo(inputDelete.value);
//   inputDelete.value='';
// }
// else{
//   alert("please put your enjoy in the case");
// }
// });


//what we've missed:
// //1.strick comparison 
//-----------------------
// let num =3;
// if (num===3){
//   console.log("true");
// } else{
//   console.log("false");
// }


// let bool = 1;
// if (bool===true){
//   console.log("true");
// } else{
//   console.log("false");
// }
// //2.You can write condition like this
//-----------------------------------
// if(true) console.log("true")
// else console.log("false")