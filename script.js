const input_Filed = document.getElementById("input_field");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(input_Filed.value === ''){
        alert("You must write Something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =input_Filed.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_Filed.value = "";
    savedata();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()