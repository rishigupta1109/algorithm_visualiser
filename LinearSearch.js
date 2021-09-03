console.log("connected");
let numofelements=5;
document.getElementById("lsnoe").onchange=(e)=>{
    createArray(e.target.value);
};
const createArray=(numofelements)=>{
    let array=document.getElementsByClassName("array")[0];
    array.innerHTML="";
    for(let i=0;i<numofelements;i++){
        let child=`<div class="elements">${Math.floor(Math.random()*100)}</div>`;
        array.innerHTML +=child;
    }
}
createArray(numofelements);





const LinearSearch=()=>{
    console.log("searching");
    let key=document.getElementById("linearkey").value;
    let speed=document.getElementById("lsspeed").value;
    let elements=document.getElementsByClassName("elements");
    let found=[false,-1];
    let status=document.getElementById("linearStatus");
    status.innerText="Running";
    for(let i=0;i<elements.length;i++){
        
        setTimeout(()=>{
            if(i!==0){
                elements[i-1].style.backgroundColor="gold";
            }
            if(i===elements.length-1&&found[0]===false){
                status.innerText="not found";
            }
            elements[i].style.backgroundColor="red";
            if(found[1]===i){
                elements[i].style.backgroundColor="green";
                status.innerText="found";
            }
        },(1200/speed)*i);
        console.log(elements[i].innerText,key);
        if(elements[i].innerText==key){
            found=[true,i];
            break;
        }
    }
    

}
let linearStartBtn=document.getElementById("linearStartBtn");
let linearResetBtn=document.getElementById("linearResetBtn");
linearResetBtn.onclick=()=>{
  let elements=document.getElementsByClassName("elements");
  Array.from(elements).forEach((element)=>{
        element.style.backgroundColor="gold";
        let status=document.getElementById("linearStatus");
        status.innerText="Waiting to start";
        document.getElementById("linearkey").value="";
  })  
}
linearStartBtn.onclick=LinearSearch;