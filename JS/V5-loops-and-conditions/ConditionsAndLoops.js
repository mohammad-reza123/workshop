// conditions : what to do depending on the weather

// let weather = "sunny"; //sunny, rainy, cloudy, snowing

// if(weather == "sunny"){
//   console.log("take your sun glasses");
// }
// else if(weather == "rainy"){
//   console.log("take your umbrella!");
// }
// else if(weather == "cloudy"){
//   console.log("take your jacket!");
// }
// else if(weather == "snowing"){
//   console.log("take your sledges!");
// }
// else{
//   console.log("don't know yet");
// }


// //age condition
// function calculateAge(birthYear){
// let currentYear= new Date().getFullYear();
// let age=currentYear-birthYear;
// let msg="";

// if(age<6){
//   msg="drink milk";
// }
// else if (age>6 && age<18){
//   msg="good luck for the rest,";
// }
// else if(age<18){
//   msg="Stop we can't help you";
// }
// else if(age >=18 && age <40){
//   msg="no luck bitch!";
// }
// else if(age >=40 && age <=65){
//   msg="you won 1 million $.";
// }
// else if(age>=65){
//   msg="see u in hell!";
// }
// else{
//   msg="let's another shut";
// }

// return "you have :" + age + ": "+ msg;
// }
// console.log(calculateAge(1999));
// console.log(calculateAge(100));
// console.log(calculateAge(2013));
// console.log(calculateAge(2008));


//or comparison operator
// let weather="rainy";
// if(weather == "rainy"|| weather == "cloudy"){
  
// }

//comparaison oprator
/*
==  //=> equality
||  //=> or
&&  //=> and
<  //
<=  //
>  //
>=  //

*/

//LOOPS-------------------------------------------------------------------------
//for loop -----------------------
// let num = 100;
// for(let i=0; i<=num; i++){
//   console.log(i);
// }
//for an array-----------
let names = ["ali","karim","magalie", "coline","mamad", "khar"];
//console.log(names.length);
//for loop with array lenght-----------
// for(let i=0; i< names.length; i++){
//   console.log(names[i]);
// }

//foreach Loop---------------------
// names.forEach(function(ithem, index){
//   console.log(index, ithem); 
// });

//function is outside here----------------
// function interatenames(ithem){
//   console.log(ithem);
// }
// name.forEach(interatenames);


//exercices : loop inside an array containing object
let newtodos=[
  {
    text:"ithem1",
    completed:true
  },
  {
    text:"ithem2",
    completed:false
  },
  {
    text:"ithem3",
    completed:true
  },
  {
    text:"ithem4",
    completed:true
  }
];

//use "for" to display the todos text
// for(let i = 0; i<newtodos.length; i++){
//   console.log (newtodos[i].text);
// }
/////check the status of completed key------------
//use "foreach" to display the todos text
newtodos.forEach(function(newtodos){
  
  let completedstr= "( )";
//we can delete ==true here (1==1)=true , (1==3)=false
  if(newtodos.completed==true){
    completedstr="(x)";
  }
  //ternary operator approch
  // let completedstr= ( newtodos.completed)? "(x)" : "( )";

  // console.log(completedstr,newtodos.text); 
});