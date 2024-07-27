const inputBox = document.getElementById("input-text");
const listContainer = document.querySelector(".list");

function addTask() {
    if (inputBox.value === "") {
        alert("Please Enter Task");
    } else {
        let list = document.createElement("li");
        list.textContent = inputBox.value;
        listContainer.appendChild(list);

        // For making cross for deleting task
        let span = document.createElement("span");
        span.textContent = "\u00D7"; // Unicode for '×'
        list.appendChild(span);
        
        
    }

    inputBox.value = "";
    saveTask();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
},
false
);
function saveTask() {
    localStorage.setItem("task", listContainer.innerHTML);
}
function getTask() {
    listContainer.innerHTML = localStorage.getItem("task");
}
getTask();