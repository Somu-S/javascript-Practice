//for loop
// let work=[
//     {title:'dfd'},
//     {title:'dsdfd'},
//     {title:'ddsfd'},
//     {title:'ddssdfd'},
// ]
// for (i=0; i<=work.length-1;i++){
//     console.log(work[i].title)
// }

// let ball=["football","volleyball","cricketball"]

// for(i=0; i<=ball.length;i++){
//     console.log(ball[0])
//     console.log(' ')
// }

// for (var i = 0; i < 5; i++){
//     let name = "john"
//     console.log ("HI" + name);
// }

// var arr = [1,2,3, 4,5];
// for (var i=0; i < arr.length;i++){
//     console.log (arr[i]);
// }

// //nested for loop
// for (var i = 0; i <5; i ++){
//     for (var j = 0; j<5; j++){
//         console.log (i+""+j);
//     }
// }



// //left-triangle pattern
// let star='';
// for(i=0;i<=5;i++){
//     for(j=0;j<=i;j++){
// star+="*"
//     }
//     star+='\n'
// }
// console.log (star);


// //downward triangle pattern
 let stars='';
 for(i=5;i>=0;i--){
     for(j=0;j<=i;j++){
 stars+="*"
     }
     stars+='\n'
 }
 console.log (stars);


// //right pascal triangle pattern
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// //square pattern 
// let sq=""
// for (i=0;i<=4;i++){
//     for (j=0; j<=4;j++){
//      sq+="*"
//     }
//     sq+="\n"
// }
// console.log (sq);



// *****
// *   *
// *   *
// *   *
// *****
let n = 5; // row or column count
// defining an empty string
let cn = "";
for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      cn += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        cn += "*";
      }
      else {
        cn += " ";
      }
    }
  }
  // newline after each row
  cn += "\n";
}
// printing the string
console.log(cn);




  //         *
  //       * *
  //     * * *
  //   * * * *
  // * * * * *
  // let u = 5;
  // let word = "";
  // for (let i = 1; i <= u; i++) {
  //   // printing spaces
  //   for (let j = 0; j < u - i; j++) {
  //     word += " ";
  //   }
  //   // printing star
  //   for (let k = 0; k < i; k++) {
  //     word += "*";
  //   }
  //   word += "\n";
  // }
  // console.log(word);



//      *
//     ***
//    *****
//   *******
//  *********
function pyramid(n) {  // Input or number of rows
  for (var i = 1; i <= n; i++) {
      var s = "";
      // For every each counter there exist 2*n-1 value
      for (var j = 1; j <= (2 * n - 1); j++) {
        // Hint: Check the workbook image
          (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " ";   
      }
      console.log(s);
  }
}
pyramid(5);

// *********
//  *******
//   *****
//    ***
//     *
let o = 5;
let happy = '';
for (let i = 0; i<o;i++){
  for(let j=0;j<i;j++){
    happy+=" ";
  }
  for(let k = 0; k<2*(o-i)-1;k++){
    happy+="*";
  }
  happy+="\n";
}
console.log (happy);


//     *
//    * *
//   *   *
//  *     *
// *********
let rows = 5;
let hol = "";
// External loop
for (let i = 1; i <= rows; i++) {
  // printing spaces
  for (let j = 1; j <= rows - i; j++) {
    hol += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === rows) {
      hol += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        hol += "*";
      }
      else {
        hol += " ";
      }
    }
  }
  hol += "\n";
}
console.log(hol);

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
let no = 5;
let dia = "";
// Upside pyramid
for (let i = 1; i <= no; i++) {
  // printing spaces
  for (let j = no; j > i; j--) {
    dia += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    dia += "*";
  }
  dia += "\n";
}
// downside pyramid
for (let i = 1; i <= no - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    dia += " ";
  }
  // printing star
  for (let k = (no - i) * 2 - 1; k > 0; k--) {
    dia += "*";
  }
  dia += "\n";
}
console.log(dia);


//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *
let st = 5;
let lio= "";
for (let i = 1; i<=st;i++){
  for(let j=1;j<=st-i;j++){
    lio+=" ";
  }
  for(let k=1;k<=i;k++){
    lio+="*";
  }
  lio+="\n";
}
for(i=1;i<=st-1;i++){
  for(let j=1;j<=i;j++){
    lio+=" ";
  }
  for(let k=1;k<=st-i;k++){
    lio+="*"
  }
  lio+="\n";
}
console.log (lio);



// //number patterns
// // 1
// // 12
// // 123
// // 1234
// // 12345
// let num = "";
// for (i=1;i<=5;i++){
//     for(j=1; j<=i;j++){
//         num+=j;
//     }
//     num+="\n";
// }
// console.log (num);

// //12345
// //1234
// //123
// //12
// //1
// let bar='';
// for(i=5;i>=0;i--){
//     for(j=1;j<=i;j++){
//         bar+=j;
//     }
//     bar+='\n'
// }
// console.log (bar)

// let l=5;
// let output ='';
// for(let i=1; i <=n;i++){
//     for (let j=1;j<=l-i+1;j++){
//         output+=j;
//     }
//     output+="\n";
// }
// console.log (output)

// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// let a=4;
// box = '';
// ad=1;
// for(i=0;i<4;i++){
//     for(j=0;j<=i;j++){
//         box+=ad;
//         ad++
//     }
//     box+='\n';
// }
// console.log (box)

// // 1 
// // 2 2
// // 3 3 3
// // 4 4 4 4
// // 5 5 5 5 5
// hlo ='';
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         hlo+=i;
//     }
//     hlo+='\n';
// }
// console.log (hlo);


// // 1 2 3 4
// // 1 2 3 
// // 1 2 
// // 1
// let oop='';
// for(let i=4;i>=4;i++){
//     for(let j=1;j<=4;j++){
//         oop+=j;
//     }
//     oop+='\n';
// }
// console.log (oop);

//alphabet pattern
// K
// K i
// k i s
// k i s a
// k i s a n
let a = ['k','i','s','a','n']
let messi = "";
for (let i = 0; i<=a.length-1;i++){
  for (j = 0; j<=i; j++){
     messi+=a[j];
  }
  messi+='\n';
}
console.log (messi);

// k
// u u
// s s s
// i i i i
// n n n n n
// a a a a a a 
let V = '';
let ninja = ['k','u','s','i','n','a'];
for(let i = 0;i<=5;i++){
  for(let j = 0;j<=i;j++){
    V+=ninja[i];
  }
  V+="\n";
}
console.log (V);

// A
// B C
// D E F
// G H I J
// K L M N O
let A = '';
let count=0;
let stink=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o']
for(let i = 0;i<=5;i++){
  for(let j=0;j<i;j++){
    A+=stink[count];
    count++;
  }
  A+="\n";
}
console.log (A);

// k i s a n
// k i s A
// k i s
// k i
// k
let M=['k','i','s','a','n']
let hjr="";
for(let i=5;i>0;i--){
  for(let j=0;j<i;j++){
    hjr+=M[j];
  }
  hjr+="\n";
}
console.log (hjr);


//for in loop (it loops through properties of objects)
let detail="";
var person = {
  fname:"ram",
  lname:"magar",
  age:102
};
for(let key in person){
  detail+=person[key];
  detail+="\n";
}

console.log (detail);



// N 
// N I
// N I S
// N I S C
// N I S C H
// N I S C H A
// N I S C H A L
let nama=['N','I','S','C','H','A','L']
let ord="";
for(let i = 0;i<=nama.length;i++){
  for(let j = 0; j<i;j++){
    ord+=nama[j];
  }
  ord+='\n';
}
console.log (ord);

//
string="";
for(i=1;i<=5;i++){
for(j=5;j>=i;j--){
  string += "*";
}
string +="\n";
}
console.log(string);

//
answer="";
i=1;
while(i<=5){
  j=5;
  while(j>=i){
    answer +="*";
    j--;
  }
  answer +="\n";
  i++;
}
console.log(answer);

//
a="";
i=1;
do{
  j=5;
 do{
  a+="*";
  j--;
 }
 while(j>=i)
 a+="\n";
 i++;
}
while(
  i<=5
)
console.log(a);





rue="";
i=1;
do {
 rue+="the number is"+i;
 rue+='\n'
 i++;
}
while(i<=9);
console.log (rue);

//
fue='';
i=1
while(i<=10){
  fue+="the number is"+i;
  fue+="\n"
  i++;
}
console.log (fue)