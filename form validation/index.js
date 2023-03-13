let values={
    fname:'',
    lname:'',
    email:'',
    password:'',
    msg:''
}

function Value(x,y){
    console.log(x,y)
    if(y==='fname'){
        values.fname=x;
    }
    if(y==='lname'){
        values.lname=x;
    }
    if(y==='email'){
        values.email=x;
    }
    if(y=='password'){
        values.password=x;
    }
    if(y==='msg'){
        values.msg=x;
    }
    console.log(values.lname.length);
}

let ferror = document.querySelector('.f-error');
let lerror = document.querySelector('.l-error');
let EmError = document.querySelector('.E-error');
let passWord= document.querySelector('.p-error');
let mailformat = /@/;


function validation(){
    if(values.fname.length===0 ){
        ferror.innerHTML='The field cannot be empty';
    }
    if(values.fname.length<=4){
        ferror.innerHTML='The name should be atleast 4 characters';
    }
    else{
        ferror.innerHTML='';
    }
    if(values.lname.length===0){
        lerror.innerHTML='The field cannot be empty';
    }
    else{
        lerror.innerHTML='';
    }
    if(values.email.length===0 ){
        EmError.innerHTML="Please enter your email address";
    }
    else if(!values.email.match(mailformat)){
        EmError.innerHTML='Invalid email';
    }
    else{
        EmError.innerHTML='';
    }

    if(values.password.length===0){
        passWord.innerHTML="Please enter your password";
        passWord.style.color='red';
    }
    if(values.password.length<=5 & values.password.length>=1){
        passWord.innerHTML="Your password must be atleast 5 characters"
        passWord.style.color='red';
    }
    if(values.password.length>=5){
        passWord.innerHTML='';
    }
}

let PopBg= document.querySelector('.modal');
let popup = document.querySelector('.popup');
let form = document.querySelector('.form');

function Popup(){
    popup.style.transform='translateY(100%) scale(1)';
    PopBg.style.display='block';
}

function closePop(){
    popup.style.transform='translateY(-800%)';
    PopBg.style.display='none';
}


function NoEroor (){
    if(values.fname.length>=4 && values.lname.length>=1 && values.email.length>=1 && values.email.match(mailformat) && values.password.length>=5){
        Popup();
    }
}

function Submit(){
    validation();
    NoEroor();
}