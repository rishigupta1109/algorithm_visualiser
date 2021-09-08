let num_of_elements_in_bubble_sort_array=5;
let Bubblearray=[];
document.getElementById("bblsnoe").onchange=(e)=>{
    num_of_elements_in_bubble_sort_array=e.target.value;
    BubblecreateArray();
};
const BubblecreateArray=()=>{
    let numofelements=document.getElementById("bblsnoe").value;
    let array=document.getElementsByClassName("Bubblearray")[0];
    Bubblearray=[];
    array.innerHTML="";
    for(let i=0;i<numofelements;i++){
        Bubblearray.push(Math.floor(Math.random()*100));
        let child=`<div class="bubbleelements">${Bubblearray[i]}</div>`;
        array.innerHTML +=child;
    }
}
BubblecreateArray(num_of_elements_in_bubble_sort_array);


const BubbleSort=()=>{
    let elements=document.getElementsByClassName("bubbleelements");
    let speed=document.getElementById("bblsspeed").value;
    let status=document.getElementById("BubbleStatus");
    let breakpoint=[false,-1,-1];
    status.innerText="running";
    for(let i=0;i<elements.length-1;i++){
        let x=true;
       
        for( let j=1;j<elements.length-i;j++){
            
            setTimeout(()=>{
                if(i==1&&j==1){
                    status.innerText="running";
                }
                if(j!=1){
                    elements[j-2].style.backgroundColor="gold";
                }
                elements[j-1].style.backgroundColor="#ff6565";
                elements[j].style.backgroundColor="#ff6565";
            },(((400/speed)*j)+(4000*i)));
            if(Bubblearray[j-1]>Bubblearray[j]){
                let temp=Bubblearray[j-1];
                Bubblearray[j-1]=Bubblearray[j];
                Bubblearray[j]=temp;
                x=false;
                setTimeout(()=>{
                    let temp=elements[j-1].innerText;
                    elements[j-1].innerText=elements[j].innerText;
                    elements[j].innerText=temp;
                },(((400/speed)*j)+(4000*i)));
                
            }
        }
      
        setTimeout(()=>{
            Array.from(elements).forEach((element)=>{
                element.style.backgroundColor="gold";
            })
            for(let k=elements.length-i-1;k<elements.length;k++){
                elements[k].style.backgroundColor="lightgreen";
            }
        },(((400/speed)*(elements.length-1))+(4000*i)+200));
       
        if(x){
            breakpoint=[true,i,elements.length-i+2];
            break;
        }
    }
    let timetodeclare=((400/speed)*elements.length)+(4000*(elements.length-1))+2000;
    if(breakpoint[0]){
        timetodeclare=((400/speed)*breakpoint[2])+(4000*(breakpoint[1]))+2000;
    }
    setTimeout(()=>{
        Array.from(elements).forEach((element)=>{
            element.style.backgroundColor="lightgreen";
        })
        status.innerText="sorted";
    },(timetodeclare));
   
}

const BubbleStartBtn=document.getElementById("BubbleStartBtn");
const BubbleResetBtn=document.getElementById("BubbleResetBtn");

BubbleStartBtn.onclick=BubbleSort;
BubbleResetBtn.onclick=BubblecreateArray;

