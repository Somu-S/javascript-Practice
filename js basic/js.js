console.log ("hello world");
console.warn ("this is warning");
console.error ("This is error");
var name = "myname";
 console.log (typeof(name));
 var age='34';
 console.log(typeof(age),age);
 var shoes = true;
 console.log (typeof(shoes));
 var tab = null ;
 console.log (typeof(null));
 var array = [1,2,3];
 console.log (typeof(array));

//  string to number
 var output='12';
 console.log (Number(output));

// number to string
var data= 5;
console.log (String(data));

var bat = (23).toString();
console.log (bat);

// string to number using parseInt
var c = parseInt ('45.12');
console.log (c);

// string to number using float
var num = parseFloat("32");
console.log (num);

// string to number using unary operator
var plus = (+'43');
console.log (plus);

//  boolean to number
 var a = true;
 console.log (Number(a));

// .tofixed to round up the value. we can use (f.tofixed(1-9)) dependiing on the value the no of digits will be shown after the .
var f = 45.002;
console.log (f.toFixed(8));

const g= 10;
{
  let g = 20;
  console.log (g);
}
console.log (g);

var n = '21' + 23-21;
console.log (n);

var x = "ram" + true;
console.log (x);

var apple = 5+3+'5';
console.log(apple);

var car = "34";
console.log (-car);

let dog;
german = 32;
lyabra = 34;
console.log (german+lyabra);

// note: we cannot use let and const to redeclare the value
var ball = "red";
var ball = "blue";
console.log (ball);  //variables defined with var can be redeclared and blue will be the output here

{
  var ded = "bus";
}
console.log (ded); //variables defined with var can be accessed even though it is inside the block but variables defined by let and const cannot be accessed if they are inside the block {}

//Redeclaring a variable inside a block with var will also redeclare the variable outside the block hence the output will be lot:
var B = "lol";
{
  var B = "lot";
  console.log (B);
}
console.log (B);

//Redeclaring a variable with let inside a block will not redeclare the variable outside the block hence the output will be lion:

let animal = "lion";
{
  let animal = "tiger"
}
console.log (animal);

//constant:It has fixed value and cannot be reassigned or redeclared
const hel = "23";
console.log (hel);
{
  const hel = 43;
  console.log (hel);
}
const xx=1;
const y=4;
let z=xx+y;
console.log(z)

const T= 13;
const Y= 9;
let R= T-Y;
console.log (String(R));
console.log (Boolean(R));

const P='34';
const o=23;
console.log (P+o);

const fan = "45";
const tables = 21;
let sum = fan/tables;
console.log (parseInt(sum));
console.log (sum.toFixed(2));

const V = "5";
const M= "8";
const S= "9";
console.log (Number(V)+Number(M)+Number(S));