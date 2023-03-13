
const addTestBtn = document.querySelector('.add-test');
const viewTestBtn = document.querySelector('.view-test');
const TestForm = document.querySelector('.test-form');
const viewCont = document.querySelector('.view-cont');
const SbmtBtn = document.getElementById('sbmt');
const tablebody= document.getElementById('tablebody');



addTestBtn.addEventListener('click',()=>{
    viewCont.style.display='none';
    TestForm.style.display='block';
    addTestBtn.style.background='blue';
    addTestBtn.style.color='white';
    viewTestBtn.style.color='black';
    viewTestBtn.style.background='white';
})

viewTestBtn.addEventListener('click',()=>{
    TestForm.style.display='none';
    viewCont.style.display='block';
    viewTestBtn.style.background='blue';
    viewTestBtn.style.color='white';
    addTestBtn.style.background='white';
    addTestBtn.style.color='black';
})

let TestData = [];

async function Get(){
    let response = await fetch('http://192.168.1.158:4001/placement/')
    let data = await response.json();
    console.log(data);

    data.data.map((val,i)=>{
        let image =`http://192.168.1.158:4001/public/${val.image}`
        let NData = document.createElement('tr');
        NData.className='newrow';
        NData.innerHTML=`
        <td>${i+1}</td>
        <td>${val.Name}</td>
        <td>${val.position}</td>
        <td>${val.placedAt}</td>
        <td>${val.course}</td>
        <td width='20%'><div class='truncate-overflow'>${val.description}</div></td>
        <td><img class="img" src=${image} ></td>
        <td><button>Delete</button></td>`
        tablebody.appendChild(NData);
    })
}
Get();
SbmtBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    let nme = document.getElementById('name').value;
    let position = document.getElementById('pos').value;
    let placed = document.getElementById('pla').value;
    let Crs = document.getElementById('crs').value;
    let descr = document.getElementById('des').value;
    let img = document.getElementById('img').value;
    let Nerror = document.querySelector('.nme-error');
    let PoError= document.querySelector('.pos-error');
    let PlError=document.querySelector('.pla-error');
    let crsError=document.querySelector('.crs-error');
    let DesError= document.querySelector('.des-error');
    let FileError = document.querySelector('.img-error');

    let testimonial = {
        name:'',
        position:'',
        Placed:'',
        course:'',
        description:'',
        image:''
    }


    if(nme.length==''){
        Nerror.innerHTML='Please Enter your name';
        Nerror.style.color='red';
    }
    if(nme.length>2){
        Nerror.innerHTML='';
    }
    if(position.length==''){
        PoError.innerHTML='Please enter your position';
        PoError.style.color='red';
    }
    if(position.length>=3){
        PoError.innerHTML='';
    }
    if(placed.length==0){
        PlError.innerHTML='Enter where you placed at';
        PlError.style.color='red';
    }
    if(placed.length>=3){
        PlError.innerHTML=='';
    }
    if(Crs.length==0){
        crsError.innerHTML='Enter where you placed at';
        crsError.style.color='red';
    }
    if(Crs.length>=3){
        crsError.innerHTML=='';
    }
    if(descr.length==''){
        DesError.innerHTML='short description is compulasory';
        DesError.style.color='red';
    }
    if(descr.length>5){
        DesError.innerHTML='';
    }
    if(img.length==''){
        FileError.innerHTML='Please upload your file';
        FileError.style.color='red';
    }
    if(img.length>1){
        FileError.innerHTML='';
    }
    if(nme.length>1 & position.length>1 & descr.length>1 & img.length>1 & placed.length>3 & Crs.length>3){
        testimonial.name=nme;
        testimonial.position=position;
        testimonial.Placed=placed;
        testimonial.course=Crs;
        testimonial.description=descr;
        testimonial.image=img;
        TestData.push(testimonial);
    }
    else{
        testimonial.name='';
        testimonial.position='';
        testimonial.description='';
        testimonial.image='';
    }
    TestForm.reset();

    console.log(TestData)
    console.log(testimonial);

    if(nme.length>1 & position.length>1 & descr.length>1 & img.length>1){
        let Render = ()=>{
            let ViewTbl = document.querySelector('.view-tbl');
            let Nrow=document.createElement('tr');
            Nrow.innerHTML=`
            <td>${TestData.length}</td>
            <td>${testimonial.name}</td>
            <td>${testimonial.position}</td>
            <td>${testimonial.Placed}</td>
            <td>${testimonial.course}</td>
            <td>${testimonial.description}</td>
            <td><button class='dlt'>Delete</button></td>`;
            ViewTbl.appendChild(Nrow);

            let DltBtn = document.querySelectorAll('.dlt');

            // DltBtn.forEach((btn)=>{
            //     btn.addEventListener('click', (event)=>{
            //         event.target.parentElement.parentElement.remove();
            //         TestData.pop();
            //     })
            // })

            for (let i=0 ; i<DltBtn.length ; i++){
                let btn = DltBtn[i];

                btn.addEventListener('click', (event)=>{
                    event.target.parentElement.parentElement.remove();
                    TestData.pop();
                })
            }
        }
        Render();
    }
})
