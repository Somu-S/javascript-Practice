//arithematic operator
let ari = 3;
bel = 4;
c = ari + bel;
console.log (c);

let min = 4;
let max = 7;
result = min-max;
mul = min*max;
div=max/min;
rem = max % min;
inc= ++max;
incs =max++;
dec = --min;
decs = min--;
expo = max**min;


console.log (result);
console.log (mul);
console.log (div.toFixed(2));
console.log (rem);
console.log (inc);
console.log (incs);
console.log (dec);
console.log (decs);
console.log(expo);

// comparison operator
let zor = 20;
luf = 30;
us = 20;
nam = '30';
san = '20';

console.log (zor==luf);//true if operands are equal
console.log (zor!=luf); //true if operands are not equal
console.log (zor>luf);// true if left operand is greater than right
console.log (zor>=luf);// true if left operand is greater than or equal to right
console.log (us<luf);//true if operand is less than
console.log (us<=luf);//true if operand is less than or equal to
console.log (zor===us);//true if operand are equal and of same data types
console.log (luf!==nam);//true if operand are not equal and are not of same data type

//Logical operator
//AND
let ab = 3+4;
ba = 4+8;
console.log (ab==7 && ba==12);
console.log (ab==8 && ba==4);//true only if both side are true or else false

//OR
console.log (ab==7 || ba ==12);
console.log (ab==8 || ba==23);//true if any one condition is true or false

//not
console.log (ab==7);//true if the operands is false and vice versa

//Assignment operators
let as = 30;
as+=10;
console.log (as);


bs= as-=10;//as = as-10
cs= as*=10;//as = as*10
ds= as/=10;//as = as/10
es= as%=10;//as =as%10
fs= as**=10;//as = as**10

console.log (bs);
console.log (cs);
console.log (ds);
console.log (es);
console.log (fs);

//conditonal operator
let eligible = (age>18) ? "eligible":"not eligible"
let yes = eligible + " "+"to vote";
console.log (yes);

let year=12;
result = (year>18) ? "adult":"child";
console.log(result);
