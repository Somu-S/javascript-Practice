let ab = '';
console.log (ab.length);//It counts no of letters in the string;

let hh= 'Hi \"there\" dude';
console.log (hh);

let c =" this \b is a string"
console.log ( typeof(c));

let y = new String("John");
console.log (typeof(y))

//slice()The method takes 2 parameters: the start position, and the end position (end not included).

let fr = "apple, banana, grapes";
console.log (fr.slice(0,5));

//substring
console.log (fr.substring(0,5))

//replace()method replaces a specified value with another value in a string
let a = 'please drink pepsi';
let newa=a.replace('pepsi','cocacola');//it replaces the first match only;
console.log (newa);

let b = "apples are sweet.I like apples"
let newb=b.replace(/apples/g,"banana");
console.log (newb);//here /g helps to replace all the apples with

//toUppercase():string is converted to uppercase
let word1 = "hi i am bot";
console.log (word1.toUpperCase());

//tolowercase():string is converted to lowercase
let word2 = "This is a Bot"
console.log (word2.toLowerCase());

//concat()it is use to concat the string
let word3 = "hello"+" "+"world";
word3="hello".concat(" ","world")
console.log (word3);

text1='hi';
text2='there!'
console.log (text1.concat(" "+text2));

//The trim() method removes whitespace from both sides of a string:
let text3 = "       white space is trim but trim () "
console.log (text3.trim());

//The padStart() method pads a string with another string:
let text4= '8';
console.log (text4.padStart(6,"x"));

//The padEnd() method pads a string with another string:
console.log(text4.padEnd(4,0))

//The charAt() method returns the character at a specified index (position) in a string:
let text5 = "this is football";
console.log(text5.charAt(9))

//The charCodeAt() method returns the unicode of the character at a specified index in a string:
console.log(text5.charCodeAt(1))

//A string can be converted to an array with the split() method:
let text6="a,b,c,d,e,f,g,h"
let array = text6.split(",")
console.log(array[2]);

//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
let text7 = "Html is a markup language";
console.log (text7.indexOf("is"));

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let text8 = "Html is a markup language.It is used to make webpages";
console.log (text8.lastIndexOf("is"));

//The search method searched a string for a specified value and retuns the position of the mathc:
let string1 = "search lets you locate the string"
console.log (string1.search("locate"));

//The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
console.log (text8.match(/is/g))

//The includes() method returns true if a string contains a specified value.
let string2 = "hello world welcome to the universe";
console.log (string2.includes("hello"))
//Check if a string includes "world", starting the search at position 2:
console.log (string2.includes("world",2))

//The startsWith() method returns true if a string begins with a specified value, otherwise false:
let string3 = "It checks if a string begins with specified value";
console.log (string3.startsWith("It"))

//template literal(``)
let text9 = `hello "world"`;
console.log (text9);

//  Interpolation
// Template literals provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

// The syntax is:

// ${...}


//variable substitutions
let finame="monkey";
middlename="d";
laname="luffy"
let whname=`The main characters name is ${finame} ${middlename} ${laname}`;
console.log (whname);


//expression substitutions
let profit = 200;
let cp= 300;
total= `Total:${(profit+cp)}`;
console.log (total);

let nam = 'kisan';
function reversestr(str){
    return str.split("").reverse().join("");
}
console.log (reversestr(nam));


let apple = "a";
let ball = "b";

function checkstring (apple ,ball){
    if(apple == ball){
        console.log(apple.toUpperCase())
    }
    else{
        console.log("The two string do not match")
    }
}

