const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");  //creating element tag name "li" storing value in li variable
        li.innerHTML = inputBox.value; // text inside li what we will add in input box that will added in li
        listContainer.appendChild(li);
//to delet the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        //display this span
        li.appendChild(span);

    }
    //to clear text after giving value
    inputBox.value = "";
    //whenever we add any task save data will be called
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

}, false);

// to store todolist after refresh

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);// list container me jo v item hogaa wo hmare storage data m store ho jayega

}
//display data whenevr site is open
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();