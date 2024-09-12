const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask =() =>{
    if(inputBox.value === ''){
        alert("You must add a task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // this will display the li in the list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";// this the cross icon meant to delete the added to text
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
