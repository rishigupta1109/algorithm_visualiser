let Insertion_sort_array=5;
let Insertionarray=[];
document.getElementById("isnoe").onchange=(e)=>{
    Insertion_sort_array=e.target.value;
    InsertioncreateArray();
};
const InsertioncreateArray=()=>{
    let numofelements=document.getElementById("isnoe").value;
    let array=document.getElementsByClassName("Insertionarray")[0];
    Insertionarray=[];
    array.innerHTML="";
    for(let i=0;i<numofelements;i++){
        Insertionarray.push(Math.floor(Math.random()*100));
        let child=`<div class="Insertionelements">${Insertionarray[i]}</div>`;
        array.innerHTML +=child;
    }
}
InsertioncreateArray(Insertion_sort_array);

const InsertionSort=()=>{
    let elements=document.getElementsByClassName("Insertionelements");
    let speed=document.getElementById("isspeed").value;
    let status=document.getElementById("InsertionStatus");
    status.innerText="running";
    let exitj=-1;
    for(let i=0;i<Insertionarray.length-1;i++){
        let temp=Insertionarray[i+1];
        setTimeout(()=>{
            elements[i+1].style.backgroundColor="#5cc8ff";
        },5000*speed*i);
        let y=[false,i+1];
        for(let j=i+1;j>0;j--){
            if(Insertionarray[j-1]<temp){
                y[0]=true;
                break;
            }
            Insertionarray[j]=Insertionarray[j-1];
            y[1]=j-1;
            setTimeout(()=>{
                try{
                    elements[j].style.backgroundColor="#f77575";
                    elements[j-1].style.backgroundColor="#f77575";
                    elements[j+1].style.backgroundColor="gold";
                    
                }
                catch(error){
                    console.log(error);
                }
               
             
                elements[j].innerText=elements[j-1].innerText;
            },5000*speed*i+500*speed*(i+1-j)+1000);
            exitj=j;
        }      
        if(y[0]){
            Insertionarray[y[1]]=temp;
            setTimeout(()=>{
                elements[y[1]].innerText=temp;
                Array.from(elements).forEach((element)=>{
                    element.style.backgroundColor="gold";
                  
                })
            },5000*speed*i+500*speed*(i+1-y[1])+1500)
            
        }
        else{
            Insertionarray[0]=temp;
            setTimeout(()=>{
            elements[0].innerText=temp;
            Array.from(elements).forEach((element)=>{
                element.style.backgroundColor="gold";
              
            })
            },5000*speed*i+500*speed*(i+1-y[1])+1500)
           
        }
    }
    setTimeout(()=>{
        Array.from(elements).forEach((element)=>{
            element.style.backgroundColor="#77ed77";
            status.innerText="sorted";
        })
    },5000*speed*(Insertionarray.length-2)+500*speed*(exitj+1)+2500);
   
}

const InsertionStartBtn=document.getElementById("InsertionStartBtn");
const InsertionResetBtn=document.getElementById("InsertionResetBtn");

InsertionStartBtn.onclick=InsertionSort;
InsertionResetBtn.onclick=InsertioncreateArray;
