console.log("binary search js");
let numofelementsinB=5;
let BinaryArray=[];

document.getElementById("bsnoe").onchange=(e)=>{
    createArrayofB(e.target.value);
};
const createArrayofB=(numofelements)=>{
    let array=document.getElementsByClassName("Binaryarray")[0];
    BinaryArray=[];
    for(let i=0;i<numofelements;i++){
        BinaryArray.push(Math.floor(Math.random()*100));
    }
    BinaryArray.sort(function(a, b){return a - b});
    array.innerHTML="";
    for(let i=0;i<numofelements;i++){
        let child=`<div class="Belements">${BinaryArray[i]}</div>`;
        array.innerHTML +=child;
    }
}

createArrayofB(numofelementsinB);


const BinarySearch=()=>{
    BinaryReset();
    console.log("Binary searching");
    let key=document.getElementById("binarykey").value;
    if(key.trim()===""){
        alert("please write a key");
        return;
    }
    let speed=document.getElementById("bsspeed").value;
    let elements=document.getElementsByClassName("Belements");
    let found=[false,-1];
    let status=document.getElementById("BinaryStatus");
    status.innerText="Running";
    let start=0;
    let end=BinaryArray.length-1;
    for(let i=start;i<=end;i++){
        let mid=Math.floor((start+end)/2);
        let s=start;
        let e=end;
        setTimeout(()=>{

            elements[mid].style.backgroundColor="#d3b4f9";
            elements[s].style.backgroundColor="#ff7f7f";
            elements[e].style.backgroundColor="#ff7f7f";
            
            setTimeout(()=>{
                if(s===found[1]||e===found[1]||mid===found[1]){
                
                    status.innerText="found";
                   
                        Array.from(elements).forEach((element,index)=>{
                            if(index!==found[1])
                            element.style.backgroundColor="grey";
                          
                        }) 
                    elements[found[1]].style.backgroundColor="#8ad28a";
                }
                if((mid===s||mid===e)&&found[0]===false){
                    status.innerText="not found";
                    Array.from(elements).forEach((element)=>{
                        element.style.backgroundColor="grey";
                    })
                }
            },1000)
            
            for(let j=0;j<elements.length;j++){
                if(j===s){
                    j=e+1;
                }
                try{
               elements[j].style.backgroundColor="grey";
               throw error;
            }
               catch(error){
                console.log(error);
            }
            }

        },(2000/speed)*i);
        if(BinaryArray[start]===Number(key)){
            found=[true,start];
            break;
        }
        else if(BinaryArray[end]===Number(key)){
            found=[true,end];
            break;
        }
        else if(BinaryArray[mid]===Number(key)){
            found=[true,mid];
            break;
        }
        if(BinaryArray[mid]>key){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
}
const BinaryReset=()=>{
    for(let j=0;j<BinaryArray.length;j++){
        let status=document.getElementById("BinaryStatus");
        let elements=document.getElementsByClassName("Belements");
        elements[j].style.backgroundColor="gold";
        status.innerText="Waiting to start";
    }
}
let BinaryStartBtn=document.getElementById("BinaryStartBtn");
let BinaryResetBtn=document.getElementById("BinaryResetBtn");
BinaryStartBtn.onclick=BinarySearch;
BinaryResetBtn.onclick=BinaryReset;