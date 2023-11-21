const inputbox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask(){
    if(inputbox.value === ''){ //if input box is empty and we click on add button then throw error
        alert("You must write something!");
    }
    else{
        //else add new li tag in ul tag and put text in that li tag which we have write in input box
        let li = document.createElement("li"); 
        li.innerHTML = inputbox.value;
        //displayed in list-container
        listContainer.appendChild(li);
        //create x sign in span tag and add after the task
        let bin = document.createElement("i");
        bin.className = "ri-delete-bin-line shaking-icon";

        // Append the icon directly to the li element
        li.appendChild(bin);

        // Append the li element to the list container
        listContainer.appendChild(li);
    }
    //clear the input box after adding task in list-container
    inputbox.value = " ";
    saveData();
}

listContainer.addEventListener("click", function(e){
    //when clicked element is of li tag then toggle checked and unchecked
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //when clicked element is of span tag(x) then remove parent tag which is li tag
    else if(e.target.tagName === "I"){
        (e.target.parentElement.remove());
        saveData();
    }
}, false);
//saves the entire list-container innerhtml in locat storage in the form of "data" file
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//everytime when refreshing the page it get data from local storage of device 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();