let inputs = document.getElementById("inp");
let text = document.querySelector("text");
showTasks();
function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let userVal=inputs.value;
        console.log(inputs.value+"empty");
        let gotLocal = localStorage.getItem("New Todo");
        if(gotLocal==null){
            listArray=[];
        }else{
            listArray=JSON.parse(gotLocal);
        }
        listArray.push(userVal);
        localStorage.setItem("New Todo",JSON.stringify(listArray));
        showTasks();
    }
}
function showTasks(){
let gotLocal=localStorage.getItem("New Todo");
if(gotLocal==null){
    listArray=[];
}else{
    listArray=JSON.parse(gotLocal);
}
const pairing = document.querySelector("pairing");
pairing.textContent=listArray.length;
let newLi=""; 
listArray.forEach((element,i )=> {
    newLi += '<li>${element}<span class=icon onclick=deleteTask(${i})><i class="fas fa-trash"></i></span></li>';
});
text.innerHTML=newLi;
inputs.value="";
}

function deleteTask(index){
    let gotLocal = localStorage.getItem("New Todo");
    listArray= JSON.parse(gotLocal);
    listArray.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(listArray));
    showTasks();
}