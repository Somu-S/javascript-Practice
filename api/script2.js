// const container = document.querySelector(".my-container");

// async function getData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//     container.innerHTML = `<p>Name: ${data.results[0].name.first} ${data.results[0].name.last}</p>`;
//     let newdiv = document.createElement('div');
//     newdiv.innerHTML=`<div>${data[1].title}</div>`;
//     container.append(newdiv);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();


async function getData() {

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    let container = document.getElementById("parent");

    data.slice(0,10).map((val,i)=>{
      let Ndiv = document.createElement('div');
      Ndiv.className='hero';
      Ndiv.innerHTML=`<div class="title">Title:${val.title}</div>`;
      Ndiv.innerHTML+=`<img src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class='image'><img>`
      Ndiv.innerHTML+=`<div class="id">userId:${val.userId}</div>`;
      Ndiv.innerHTML+=`<div class="body">Body:${val.body}</div>`;
      Ndiv.style.color='red';
      container.append(Ndiv);
    })
  } catch (error) {
    console.log(error);
  }
}
getData();
