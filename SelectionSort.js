let num_of_elements_in_Selection_sort_array=5;
let Selectionarray=[];
document.getElementById("ssnoe").onchange=(e)=>{
    num_of_elements_in_Selection_sort_array=e.target.value;
    SelectioncreateArray();
};
const SelectioncreateArray=()=>{
    let numofelements=document.getElementById("ssnoe").value;
    let array=document.getElementsByClassName("Selectionarray")[0];
    Selectionarray=[];
    array.innerHTML="";
    for(let i=0;i<numofelements;i++){
        Selectionarray.push(Math.floor(Math.random()*100));
        let child=`<div class="selectionelements">${Selectionarray[i]}</div>`;
        array.innerHTML +=child;
    }
}
SelectioncreateArray(num_of_elements_in_Selection_sort_array);

const SelectionSort=()=>{
    let elements=document.getElementsByClassName("selectionelements");
    let speed=document.getElementById("ssspeed").value;
    let status=document.getElementById("SelectionStatus");
    status.innerText="running";
    for(let i=0;i<elements.length-1;i++){
       let maxIndex=0;
        for( let j=1;j<elements.length-i;j++){
          
              
               if(j==1){
                setTimeout(()=>{
                    elements[0].style.backgroundColor="lightskyblue";
                },(500/speed)*j+5000*i);
                }
               setTimeout(()=>{
                let oldmi=maxIndex;
                if(Selectionarray[maxIndex]<Selectionarray[j]){
                    maxIndex=j;
                }
                   let mi=maxIndex;
                   if(oldmi!==mi){
                       elements[oldmi].style.backgroundColor="gold";
                   }
                   if(j!==1&&j-1!==mi){
                    elements[j-1].style.backgroundColor="gold";
                   }
                    elements[j].style.backgroundColor="#ff5757";
                    if(mi===j){
                        elements[j].style.backgroundColor="lightskyblue";
                    }
               },(500/speed)*j+5000*i+500);
        }
        setTimeout(()=>{
            let temp1=Selectionarray[elements.length-i-1];
            Selectionarray[elements.length-i-1]=Selectionarray[maxIndex];
            Selectionarray[maxIndex]=temp1;
            let temp =elements[elements.length-i-1].innerText;
            elements[elements.length-i-1].innerText=elements[maxIndex].innerText;
            elements[maxIndex].style.backgroundColor="gold";
            elements[maxIndex].innerText=temp;
            elements[elements.length-i-1].style.backgroundColor="#95f195";

        },(500/speed)*(elements.length-1)+5000*i+1000)
    }
    setTimeout(()=>{
        elements[0].style.backgroundColor="#95f195";
        status.innerText="sorted";

    },(500/speed)*(elements.length-1)+5000*(elements.length-2)+2000)
}

const SelectionStartBtn=document.getElementById("SelectionStartBtn");
const SelectionResetBtn=document.getElementById("SelectionResetBtn");

SelectionStartBtn.onclick=SelectionSort;
SelectionResetBtn.onclick=SelectioncreateArray;
