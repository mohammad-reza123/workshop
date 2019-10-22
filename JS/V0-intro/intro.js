
/*
*DATA TYPE
*ALL DATA TYPES IN JS
***************************************
 */


/* STRINGS
------------------------------------ */
"hello every one i'm mohammad reza"
'hello every one i am mohammad reza'
'hello every one i\'m mohammad reza'

'<h1 class="im ur dad"> my title </h1>'
/* NUMBERS
------------------------------------ */
//number can be positif and negative
3.4 // float number

/* BOOLEAN
------------------------------------ */
true
false

/* NULL & UNDEFINED
------------------------------------ */
let bob = null;
let edrees = undefined;


/* OBJECTS
------------------------------------ */
//Array
["hello", "sorin"]//its a object
//function
function mykooni() {
  return 'nothing';
}
//object
{
  "name":"reza";
  "age" : 103;
  "country": "afg";
}


/*
*VARIABLED
*VATIABLES ARE LIKE BOX / CONTANERS
***************************************
 */
//let ==> when content will/can change
let name="sorin123";
let age=39;
let person= name+age;
//const ==> when content must not change
const day= ["monday","tuesday", "ect."];
//var ==> the old way, a golabal variables:
var bob= 3;
//RULES & conventions(OF naming variables)
let bob=3; //good
let BoB=3; //bad practice
let Bob=3;//bad

let 0bob=3;//wrong
let bob the great=3;//wrong
let aimé=3;//wrong special caraccter 

//JS is case sensitive language 
let bob=3;
let BOB=2;//not the same as bob

//Long words and the Camel case 
let bob_the_great=34;//could be like this 
let bobthegreat= 34; //bad practice
let BobTheGreat=34;//good one u can use it 
