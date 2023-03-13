
const subjects = ['math','english','computer']; //this is an array
console.log (subjects[1]); //we can take array value from index

const nation = ['nepal','india','japan'];
const vn = ['kathmandu','mumbai','tokyo'];
console.log (nation[0]+"="+vn[0]);

const ob = {name:'nen',age:20,};
console.log (ob.name.length)
ob.name='ten'
console.log (ob.name);
ob.weight=54;
console.log (ob);

const txt = [
    {school:'kalika',level:+2,location:'butwal'},
    {name:'kage',sport:'football',position:'striker'}
];
console.log (txt[1].position);


// const datas =[
//   {name:'nischal',age:50,address:'butwal'},
//   {name:'aladin',age:50,address:'butwal'},
//   {name:'pawalwan',age:50,address:'butwal'},
//   {name:'somu',age:50,address:'butwal'},
//   {name:'rohit',age:50,address:'butwal'},
//   {name:'kisan',age:50,address:'butwal'},
// ]



// console.log (datas.name)
const gun = [
    {
     fruit:['apple','banana','guava'],place:['ktm','btl','pkr']
    }
];
console.log (gun[0].fruit[0]);
console.log (gun[0].place[2]);


//array method

// new Array () it is used to create new Array
const birds = new Array ("sparrow","parrot","eagle")
console.log (birds);

//changing array elements
const brand=["nike","adidas","puma"]
brand[0]="kine"; //it changes the index 0 into "kine"
console.log (brand);



//Array to strings = toString()
const hey= ["time","minutes","hours"];
console.log (hey.toString());

//The join() method also joins all array elements into a string.In addition you can specify operatror;
const game = ['cod','pubg','fortnite'];
console.log (game.join('*'));//it prints cod*pubg*fortnite


//The pop() method removes the last element from an array:
const color=['red','yellow','green'];
console.log (color.pop());

//The push() method adds a new element to an array (at the end):

const li = ['stone','brick','mud'];
console.log (li.push("water"));
console.log (li);
//here water is pushed into li and the next time stone,brick,mud,water is printed

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
const di = ['car','bikes','cycles'];
console.log (di.shift('car'));
console.log  (di);//car is shifted out hence the output will be bikes,cycles

const ei = ['hi','hello','bye'];
console.log (ei.unshift('good'))
console.log (ei);//goood is printed ahead of hi,hello and bye

//The concat() method creates a new array by merging (concatenating) existing arrays:
const boys = ['chris','williams','jake'];
const girls = ['rebecca','kristi','noel']
const co = boys.concat(girls);
console.log (co);

//The splice() method can be used to add new items to an array:
const scl=['paramou','everst','newjers'];
console.log (scl.splice(2,0, 'united','manches'));
console.log (scl);
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.


//The slice() method slices out a piece of an array into a new array.
const veg = ['cabbage','potato','tomato'];
console.log (veg.slice(1));
console.log (veg);



//javascript sorting an array 

//The sort() method sorts an array alphabetically:
const araa1=['apple','ball','fat','daf'];
console.log (araa1.sort());


//The reverse() method reverses the elements in an array.
console.log (araa1.reverse());

//Numeric sort
const point=[34,32,2,23,6,22,5];
console.log (point.sort(function(a,b){
    return a-b
}))

//sorting array in random order by fisher Yates method
const numer = [9,23,83,1,34,35,64,2,22];
for(let i=numer.length-1;i>0;i--){
    let j = Math.floor(Math.random()*i)
    let k = numer [i]
    numer[j]=k
}
console.log (numer);

//sorting array in random using array.sort
console.log (numer.sort(function(a,b){
    return 0.5 - Math.random()
}))


//You can use Math.max.apply to find the highest number in an array:
const arr2=[30,23,543,23,234,53];
function maxarray(arr){
    return Math.max.apply(null,arr);
}
console.log (maxarray(arr2));

//you can use min instead of max to find minimum aray 


//sorting objects Arrays by numbers
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  //writing compare function to compare the property values:
  console.log (cars.sort(function(a,b){return a.year-b.year}));


  //sortin object arrays by strings
  console.log (cars.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y =b.type.toLowerCase();
    if (x<y) {return -1;}
    if (x>y) {return 1;}
    return 0;
  }))


  //Array.from helps to create array from string
 console.log (Array.from("human"))

 //array map 
 const digit = [1,3,5,6,2,3];
 function myp (arr){
    return arr*2;
 }

 let mypnum = digit.map(myp);
 console.log (mypnum);

 let numbers = [2,4,6,8];
//function to return the square of number
function square(number){
    return number * number;
}

let square_numbers=numbers.map(square);
console.log (square_numbers);

let intefer = [2,3,4,5,6];
function mult (num){
    return num*4;
}
let multarr = intefer.map(mult);
console.log (multarr);

//
const human = [
    {firstname:"Malcom" ,lastname: "Reynolds"},
    {firstname: "Kaylee", lastname: "Fyre"},
    {firstname: "Hana" , lastname:"leoo"}
];
let getfullname=(item) => [item.firstname,item.lastname].join(" ");
let fuulname=human.map(getfullname);
console.log (fuulname);

//
const prices = [1800,2000,3000,5000,500,8000];
let newPrices = prices.map(Math.sqrt);
console.log (newPrices);

//
const strring = "barcelona";
const newstrring =strring.split('');
console.log (newstrring);

//
const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

const calcAmt = (obj) => {
    newObj ={};
    newObj.name = obj.name;
    newObj.netearning = obj.salary + obj.bonus - obj.tax;
    return newObj;
}
 employees.map((val,i)=>{
    console.log(val.salary)
 });

 //joining two array to form a single array
let arr=['a','b','c','d'];
brr=['e','f','g','h']
arc=[...arr,...brr];
console.log (arc);

//
let Teacher=[
    {name:"kisan", age:28, subject:"computer"},
    {name:"Hari", age:39, subject:"science"},
    {name:"Ram", age:43, subject:"English"}
]
console.log (Teacher.find((c)=> c.age<30));
//find method to find the first occurance of an element that satisfies a test..


Teacher.map((value,i)=>{
    console.log (value.age+10);
})
Teacher.map((val,i)=>{
    console.log(val.name,val.subject);
})

let yak =Teacher.filter((value,i)=>{
    if(value.age>=30){
        console.log("they are old")
    }
})

let add = {name:"sita", age:34, subject:"nepali"}
let sur = {name:"leo", age:45, subject:"history"}

let sp = Teacher.splice(1,0, add,sur)
console.log  (sp);
console.log (Teacher[0].name.includes("kisan"))


//filter()
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let bigCities = cities.filter((pop,i)=>pop.population>3000000).sort((c1,c2)=>c1.population-c2.population);
console.log (bigCities);
//it filters out cities that has population more than 3000000;

//every()
let evens = [1,3,4,5];
console.log (evens.some((num)=>num<2))
console.log (evens.forEach((ins)=>ins*2))