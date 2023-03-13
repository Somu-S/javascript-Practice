//document.getElementByid("count").innerText=5
let saveel = document.getElementById("save-el")
let countEl= document.getElementById("count-el")

let count =0
function increment(){
    count  += 1;
    countEl.innerText=count;
}

//create a function,save() which logs out the count when its called
function save(){
    let countstr = count +" - "
    saveel.textContent+=" "+countstr
    countEl.textContent=0;
    count = 0;
}
 