let VaL ={
    name:'',
    email:'',
    phn:'',
    adrs:'',
    msg:''
}

function Input(x,y){
    if(y==='name'){
        VaL.name=x;
    }
    if(y==='Email'){
        VaL.name=x;
    }
    if(y==='phn'){
        VaL.phn=x;
    }
    if(y==='adrs'){
        VaL.adrs=x;
    }
    if(y==='Message'){
        VaL.msg=x;
    }
    console.log(x,y);
}

let NeRr = document.querySelector('.n-error');
let EeRr = document.querySelector('.e-error');
let PeRr = document.querySelector('.p-error');
let AeRr = document.querySelector('.a-error');
let Msg = document.querySelector('.MsG');
let mailformat = /@/;


function validation(){
    if(VaL.name.length===0){
        NeRr.innerHTML='The field cannot be empty';
    }
    else{
        NeRr.innerHTML='';
    }
    if(VaL.email.length===0){
        EeRr.innerHTML='Please enter your email address';
    }
    if(!VaL.email.match(mailformat)){
        EeRr.innerHTML='Invalid Email';
    }
    else{
        EeRr.innerHTML='';
    }
    if(VaL.phn.length<10){
        PeRr.innerHTML='The number should be atleast of 10 digits'
    }
    else{
        PeRr.innerHTML='';
    }
    if(VaL.adrs.length===0){
        AeRr.innerHTML='The field cannot be empty';
    }
    else{
        AeRr.innerHTML="";
    }
    if(VaL.msg.length>1){
        Msg.innerHTML='Your Message is sent';
    }
    else{
        Msg.innerHTML='';
    }
}



function Submit(){
    validation();
}