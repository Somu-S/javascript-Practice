let FValue = {
    fname:'',
    lname:'',
    email:'',
    phone:'',
    passWord:''
}

function Input (x,y){
    if(y=='f-name'){
        FValue.fname=x;
    }
    if(y=='l-name'){
        FValue.lname=x;
    }
    if(y=='Email'){
        FValue.email=x;
    }
    if(y=='phone'){
        FValue.phone=x;
    }
    if(y=='password'){
        FValue.passWord=x;
    }
    console.log(x,y)
}

let ferror = document.querySelector('.f-error');
let lerror = document.querySelector('.l-error');
let emError= document.querySelector('.e-error');
let phError= document.querySelector('.ph-error');
let pasError=document.querySelector('.pass-error');
let mailformat = /@/;


function validate(){
    alert('this is working');
    if(FValue.fname.length===0){
        ferror.innerHTML='The field cannot be empty';
    }
    else if(FValue.fname.length<=2){
        ferror.innerHTML='The name should be atleast 3 characters';
    }
    else{
        ferror.innerHTML='';
    }
    if(FValue.lname.length===0){
        lerror.innerHTML='The field cannot be empty';
    }
    else if(FValue.lname.length<=3){
        lerror.innerHTML='The name should be atleast 3 characters';
    }
    else {
        lerror.innerHTML='';
    }
    if(FValue.email.length===0){
        emError.innerHTML='The field cannot be empty';
    }
    else if(!FValue.email.match(mailformat)){
        emError.innerHTML='Invalid email'
    }
    else{
        emError.innerHTML='';
    }
    if(FValue.phone.length===0){
        phError.innerHTML='Please enter your phone number';
    }
    else if(FValue.phone.length<=10){
        phError.innerHTML='Invalid number'
    }
    else if (FValue.phone.length>=11){
        phError.innerHTML='Invalid Number';
    }
    else{
        phError.innerHTML='';
    }
    if(FValue.passWord.length===0){
        pasError.innerHTML='Please enter your password';
    }
    else{
        pasError.innerHTML='';
    }
}