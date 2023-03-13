// //if condition
// let ram = "40kg";
// shyam = "50kg";
// if (shyam != ram){
//     console.log ("shyam has same weight as ram")
// }

// //if else condition
// let age = 21;
// if (age>= 18){
//     console.log ("you are eligible to vote")
// }else{
//     console.log ("you are not eligible to vote")
// }

// //if,else if,else conditon
// let horse = 20;
// donkey = 30;
// if (horse >=donkey){
//     console.log ("horse is greater")
// }
// else if(donkey<=horse){
//     console.log ("horse is greater")
// }
// else{
//     console.log ("donkey is greater")
// }

// //if else with using function
// let sun = "2000m"
// moon = "2000m"
// function add (a,b){
//     let ans = (a+b);
//     return ans;
// }

// function sdd (x,y){
//     let cds = (parseFloat(x)+parseFloat(y));
//     return cds;
// }

// if (sun !==moon){
//     console.log (add(sun,moon));
// }
// else{
//     console.log (sdd(sun,moon));
// }



// let value ={lion:40,tiger:80,leopard:90}
// function leo(){
//     console.log ("you are right")
// }
// function wro(){
//     "you are wrong"
// }
// function sum (a,b){
//     addi = (a+b);
//     console.log (a,b)
//     return addi
// }

// if (value.leopard=90){
//     console.log (leo)
// }else {
//     console.log (wro);
// }

// if((value.lion=40) && (value.tiger=80)){
//     console.log (sum(value.lion,value.tiger))
// }


// var abc = '';
// if (1 === 0) {
//   function a() {
//     abc = 7;
//   }
// } else if ('a' === 'a') {
//   function a() {
//     abc = 19;
//   }
// } else if ('foo' === 'bar') {
//   function a() {
//     abc = 'foo';
//   }
// }
// a();
// console.log (abc);


let value={
    one:5,
    two:6,
    three:'Add'
}

// let values={
//     one:10,
//     two:6,
//     three:'Add'
// }

// let valuess={
//     one:10,
//     two:26,
//     three:'sub'
// }

function abb(a,b){
    console.log(a,b)
}

function Test(x){
    // console.log(x)
    if(x.three==='Add'){
        console.log(x)
        abb(x.one,x.two);
    }else{
        console.log(x)
    }
}


Test(value);
// Test(values);
// Test(valuess)

 
//this is function overwriting
let food ={chicken:30,mutton:90,buff:"add"}
let car ={chicken:40,mutton:89,buff:"subt"}
let hell ={chicken:80,mutton:100,buff:"mul"}
let bell ={chicken:100,mutton:200,buff:"diiv"}
function add (c,d){
    console.log (c+d);
}
function sub (a,b){
    console.log (a-b);
}
function mult(x,y){
    console.log (x*y);
}
function divi (b,n){
    console.log (b/n);
}

function adc(y){
    if(y.buff==="add"){
        console.log (y)
        add(y.chicken,y.mutton)
    }
    else if (y.buff==="subt"){
        console.log (y)
        sub(y.mutton,y.chicken);
    }
    else if (y.buff==="mul"){
        console.log (y)
        mult(y.chicken,y.mutton);
    }
    else{
        console.log (y)
        divi(y.mutton,y.chicken);
    }
}
adc (food);
adc (car);
adc (hell);
adc (bell);


