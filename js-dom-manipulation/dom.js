
// const div = document.querySelector('div');
// console.log (div.textContent);
// console.log(div.innerText);

// const body = document.body
// const div = document.createElement('div');
// div.innerHTML = "<strong>Hello world 2</strong>"

// body.append(div);

// const body = document.body
// const div = document.querySelector('div')
// const spanHi = document.querySelector("#hi")
// const spanBye = document.querySelector("#bye")

// // spanBye.remove();
// // div.append(spanBye);

// console.log (spanHi.setAttribute("id", "sdfsf"))

// spanHi.removeAttribute('title')

// console.log(spanHi.dataset.test)

// spanHi.classList.remove("new-class");
// spanHi.style.color='red'



//transversing dom
const grandparent = document.getElementById('grandparent');
const parents = Array.from(grandparent.children)
const parentsOne = parents[0]
const children = parentsOne.children

const childOne = document.querySelector('#child-one')
const childTwo = childOne.nextElementSibling

const changeColor = element => {
    element.style.backgroundColor = "yellow";
};

changeColor(childTwo.previousElementSibling)

// Change color of grandparent element
changeColor(grandparent)

// Change color of parent elements using forEach method
parents.forEach(changeColor);

