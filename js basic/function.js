//arithematic operator
let f = 8;
g = 5;
function Add (x,y){
    let result=0;
    result= (x+y);
    return result;
};

console.log (Add(f,g));
 

let a = 20;
b =10;
function subtract (x,y){
    let output = 0;
    output = (x-y);
    return output;
}

console.log (subtract(a,b));

let c = "34";
d ="23";
function gun (x,y){
    let get = 0;
    get = (c*d);
    return get;
}

console.log (gun(c,d));

let e = 40;
f = 4;
function lap (c,d){
    let cap = 0;
    cap = (c/d);
    return cap;
}

console.log (lap(e,f).toString());

h = 50;
i = 70;
function hi (a,b){
    let bi = 0;
    bi = (b%a);
    return bi;
}
console.log (hi(h,i));

// conditional operator
age = 19;
function da (old){
    let ad = (old>=18) ? "u are old":"you are young";
    return ad;
}
console.log (da(age));


//comparison operator
let j = 89;
k = 98;
function compare (c,d){
    let bus = (c==d);
    return bus;
}
console.log (compare(j,k));


//string to number using function
let nap = "34";
dap = "45";
function tap(a,b){
    let on = 0;
    on = parseFloat(a)+parseFloat(b);
    return on;
}
console.log (tap(nap,dap));

//arithematic opeator *
let apple = 9;
function num(x){
    let dum = 0;
    dum = x*x;
    return dum;
}
console.log (num(apple).toString());


//string operator
let name = "somu"
function ta(pa){
    ur=("my name is" + " " + pa)
    return ur;
}

 console.log (ta(name));


//  asignment operator
 let cat = 20;
 dog = 30;
 function ani(a,b){
    let bni 
    bni= b+=20;
    return bni;
 }
console.log (ani(cat,dog));

//logical operator AND
let football = 20;
volleyball = 30;
function sports(a,b){
    let print;
    print= (a==20) && (b==30);
    return print;
}
console.log (sports(football,volleyball));

let car = 1200; //OR
bikes = 1100;
function vehi (a,b){
    let out = (a != 1200 || b != 1100);
    return out;
}
console.log (vehi(car,bikes));

let jet = 34;//NOT
heli = 23;
function fly (a,b){
    let high;
    high=!(a==23 && b==34);
    return high;
}
console.log (fly(jet,heli));


//normal function
function sum(a,b){
    return a+b;
}
//arrow function
let sum2 = (a,b) => a+b ;

//normal
function isPositive(number ){
    return number>=0;
}

//arrow function;
let ispositive = (number) => number >=0;