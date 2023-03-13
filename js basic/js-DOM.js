document.getElementById("java").innerHTML="hello world this is javascript";

const doc = document.querySelector('.named').innerHTML="this is a change made by query selector"

const tag = document.querySelector('h1');
tag.style.color="blue";
tag.innerHTML="I changed the content using tag"

const eve = document.getElementById("btn")
eve.addEventListener("click", myfnction);

function myfnction (){
    alert ("hello world");
}

//changing color of the element
let tit = document.querySelector('.header');
tit.style.color="red";

let pare = document.querySelectorAll('.colr');
console.log(pare);

for(i=0;i<pare.length;i++){
    pare[i].style.color='red';
}

let divv = document.createElement('p');
divv.innerHTML='This is a created element';
document.body.append(divv);

let lo = document.createElement('li');
lo.classList.add('colr')
lo.textContent='products';
menu.appendChild(lo);

lo.style.color='red';
console.log (lo)