let PrV = document.querySelector('.slider-prev');
let NxT= document.querySelector('.slider-next');
let StrK =document.querySelector('.slider-track');
let index = 1;
hide(index);

function hide(par){
let SlsiD = document.getElementsByClassName('slider-slide');
    console.log(par,SlsiD.length)
    if(par>SlsiD.length){
        index=1;
    }
    if(par<1){
        index=SlsiD.length;
    }
    for(i=0; i<SlsiD.length; i++){
        SlsiD[i].style.display='none';
    }
    console.log(index-1,SlsiD.length)
    SlsiD[index-1].style.display='block';
}

function Next () {
    index+=1;
    hide(index);
}

function Prev(){
    index-=1;
    hide(index);
}